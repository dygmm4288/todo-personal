export default function useStorage(defaultValue, defaultKey, nextFunc) {
  // hook 느낌을 알기 위해서 의도적으로 작성한 코드
  const getStorage = (key) =>
    JSON.parse(localStorage.getItem(key || defaultKey)) || defaultValue;
  const setStorage = (value, key) => {
    if (!key) key = defaultKey;
    const nextValue = nextFunc(getStorage(key), value);
    localStorage.setItem(key, JSON.stringify(nextValue));
    return { key: nextValue };
  };

  return [getStorage, setStorage];
}
