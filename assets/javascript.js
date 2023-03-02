import { toggleAccordion } from "./components/toggleAccordion.js";
import { bookmarkCard } from "./components/bookmarkCard.js";
import { changeLightMode } from "./components/colorMode.js";
import observe from "./components/observer.js";
import observeScrollButton from "./components/scrollTop.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  toggleAccordion();
  bookmarkCard();
  changeLightMode();
  new observe();
  new observeScrollButton();
});

/*********************
 * OBSERVE DOM FOR CHANGES
 */

var domObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length) {
      toggleAccordion();
      new observe();
    }
  });
});

var bodyWrapper = document.body.querySelector("section.wrapper");

if (bodyWrapper) {
  domObserver.observe(bodyWrapper, {
    childList: true,
    attributes: true,
  });
}

/**********************
 *
 * FORM JAVASCRIPT ADD NEW QUESTION
 */

const form = document.querySelector("form.add-question");
const logOutputQuestion = document.querySelector(
  "span.remaining-letters.question"
);
const logOutputAnswer = document.querySelector("span.remaining-letters.answer");
const textAreaQuestion = document.querySelector(
  'textarea[name="question_name"]'
);
const textAreaAnswer = document.querySelector(
  'textarea[name="question_answer"]'
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  addQuestionElement(data);
  event.target.reset();
});

function addQuestionElement(data) {
  const node = document.querySelector("section.card.hidden");
  let clone = node.cloneNode(true);
  clone.classList.remove("hidden");
  clone.querySelector(".question").innerHTML = data.question_name;
  clone.querySelector(".answer").innerHTML = data.question_answer;
  clone.querySelector(".tags").innerHTML = `<li>#${data.question_tags}</li>`;
  document.querySelector("section.wrapper").append(clone);
}

textAreaQuestion.addEventListener("input", (event) => {
  let currentLength = event.target.value.length;
  logOutputQuestion.innerHTML = `${150 - currentLength} characters left`;
  observeBoxShadow(currentLength);
});

textAreaAnswer.addEventListener("input", (event) => {
  let currentLength = event.target.value.length;
  logOutputAnswer.innerHTML = `${150 - currentLength} characters left`;
  observeBoxShadow(currentLength);
});

textAreaQuestion.addEventListener("focusout", () => {
  logOutputQuestion.innerHTML = "";
});

textAreaAnswer.addEventListener("focusout", () => {
  logOutputAnswer.innerHTML = "";
});

function observeBoxShadow(stringLength) {
  if (stringLength >= 100 && stringLength <= 149) {
    event.target.classList.add("yellow");
    event.target.classList.remove("red");
  } else if (stringLength === 150) {
    event.target.classList.remove("yellow");
    event.target.classList.add("red");
  } else {
    event.target.classList.remove("red", "yellow");
  }
}
