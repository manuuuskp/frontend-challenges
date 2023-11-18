import { FRUITS } from "./data";

const getSearchSuggestion = (keyword) => {
  const filterRes = FRUITS.filter((fruit) =>
    fruit.toLowerCase().startsWith(keyword.toLowerCase())
  );

  return new Promise((res) => {
    setTimeout(() => res(filterRes), 1000);
  });
};

const debounce = (fn, delay = 500) => {
  let timer;
  return function () {
    const self = this;
    const args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(self, args), delay);
  };
};

export { getSearchSuggestion, debounce };
