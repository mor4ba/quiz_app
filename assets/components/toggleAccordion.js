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
      content.getAttribute("data-expanded");
      if (content.getAttribute("data-expanded") == "false") {
        content.style.height = height + "px";
        content.setAttribute("data-expanded", true);
      } else {
        content.style.height = "0px";
        content.setAttribute("data-expanded", false);
      }
    });
  });
}

export { toggleAccordion };
