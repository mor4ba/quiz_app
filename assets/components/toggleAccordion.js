function toggleAccordion() {
  // const items = document.querySelectorAll("section.card");

  // if (items === null) {
  //   return;
  // }

  // items.forEach((item) => {
  //   const expand = item.querySelector(".expandTrigger");

  //   expand.addEventListener("click", (event) => {
  //     const content = event.target.nextElementSibling;
  //     const height = content.scrollHeight;
  //     content.getAttribute("data-expanded");
  //     if (content.getAttribute("data-expanded") == "false") {
  //       content.style.height = height + "px";
  //       expand.innerHTML = "hide answer";
  //       content.setAttribute("data-expanded", true);
  //     } else {
  //       content.style.height = "0px";
  //       expand.innerHTML = "show answer";
  //       content.setAttribute("data-expanded", false);
  //     }
  //   });
  // });

  const items = document.querySelectorAll(".expandTrigger");

  if (items === null) {
    return;
  }

  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      const content = event.target.nextElementSibling;
      const height = content.scrollHeight;
      content.getAttribute("data-expanded");
      if (content.getAttribute("data-expanded") == "false") {
        content.style.height = height + "px";
        item.innerHTML = "hide answer";
        content.setAttribute("data-expanded", true);
      } else {
        content.style.height = "0px";
        item.innerHTML = "show answer";
        content.setAttribute("data-expanded", false);
      }
    });
  });
}

export { toggleAccordion };
