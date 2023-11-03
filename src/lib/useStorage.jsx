export default function useStorage(defaultValue, defaultKey) {
  // hook 느낌을 알기 위해서 의도적으로 작성한 코드
  const getStorage = (key) =>
    JSON.parse(localStorage.getItem(key || defaultKey)) || defaultValue;
  const setStorage = (value, key) => {
    if (!key) key = defaultKey;
    localStorage.setItem(key, JSON.stringify(value));
    return { key: value };
  };

  return [getStorage, setStorage];
}
