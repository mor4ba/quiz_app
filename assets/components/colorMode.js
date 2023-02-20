function changeLightMode() {
  const controller = document.querySelector("section.settings");

  if (controller === null) {
    return;
  }

  controller.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    this.classList.toggle("switch_on");
  });
}

export { changeLightMode };
