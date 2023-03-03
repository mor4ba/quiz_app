import { toggleAccordion } from "./components/toggleAccordion.js";
import { bookmarkCard } from "./components/bookmarkCard.js";
import { changeLightMode } from "./components/colorMode.js";
import { addNewQuestion } from "./components/addQuestion.js";
import observe from "./components/observer.js";
import observeScrollButton from "./components/scrollTop.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  toggleAccordion();
  bookmarkCard();
  changeLightMode();
  new observe();
  new observeScrollButton();
  addNewQuestion();
});

/*********************
 * OBSERVE DOM FOR CHANGES
 */

var domObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    toggleAccordion();
    new observe();
    //console.log(mutation);
  });
});

var bodyWrapper = document.body.querySelector("section.wrapper");

//observe for new question elements
if (bodyWrapper) {
  domObserver.observe(bodyWrapper, {
    childList: true,
  });
}
