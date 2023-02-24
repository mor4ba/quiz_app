import { toggleAccordion } from "./components/toggleAccordion.js";
import { bookmarkCard } from "./components/bookmarkCard.js";
import { changeLightMode } from "./components/colorMode.js";

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  toggleAccordion();
  bookmarkCard();
  changeLightMode();
});
