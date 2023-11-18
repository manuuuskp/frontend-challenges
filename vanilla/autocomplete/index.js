import { debounce, getSearchSuggestion } from "./utils";

const searchInput = document.getElementById("auto-search-input");
const sectionWrapper = document.querySelector(".autocomplete__sectionWrapper");

const resetSectionWrap = () => {
  sectionWrapper.innerHTML = "";
  sectionWrapper.classList.remove("autocomplete__sectionActive");
};

const handleSelect = (e) => {
  const { key } = e.target.dataset;
  searchInput.value = key;
  resetSectionWrap();
};

const appendSuggestionList = (searchLst) => {
  const docFragment = document.createDocumentFragment();
  searchLst.forEach((item) => {
    const el = document.createElement("div");
    el.innerHTML = item;
    el.setAttribute("data-key", item);
    docFragment.appendChild(el);
  });
  resetSectionWrap();
  sectionWrapper.classList.add("autocomplete__sectionActive");
  sectionWrapper.appendChild(docFragment);
};

const handleSearch = async (keyword) => {
  const searchList = await getSearchSuggestion(keyword);
  console.log(searchList);
  appendSuggestionList(searchList);
};

const handleInputChange = (e) => {
  console.log(e.target.value);
  if (e.target.value) {
    handleSearch(e.target.value);
    sectionWrapper.addEventListener("click", handleSelect);
  } else {
    resetSectionWrap();
    sectionWrapper.removeEventListener("click", handleSelect);
  }
};

(() => {
  searchInput.addEventListener("input", debounce(handleInputChange, 300));
})();
