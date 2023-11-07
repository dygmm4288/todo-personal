export function alter(a, b) {
  return (conditionFunction) => (conditionFunction() ? a : b);
}

export function alterWithFunc(a, b) {
  return (conditionFunction) => {
    return function () {
      return conditionFunction(...arguments) ? a() : b();
    };
  };
}
