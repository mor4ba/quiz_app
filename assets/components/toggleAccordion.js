function toggleAccordion() {
  const items = document.querySelectorAll("section.card");

  if (items === null) {
    return;
  }

  items.forEach((item) => {
    const expand = item.querySelector(".expandTrigger");

    expand.addEventListener("click", function () {
      const content = item.querySelector(".expandContent");
      const height = content.scrollHeight;
      content.getAttribute("aria-expanded");
      if (content.getAttribute("aria-expanded") == "false") {
        content.style.height = height + "px";
        content.setAttribute("aria-expanded", true);
      } else {
        content.style.height = "0px";
        content.setAttribute("aria-expanded", false);
      }
    });
  });
}

export { toggleAccordion };
