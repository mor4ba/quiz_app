class observeScrollButton {
  constructor() {
    this.element = document.getElementById("push-to-top");
    this.observedClass = "fade-out";
    this.header = document.getElementById("#header");

    if (this.element == null) {
      return;
    }

    this.moduleObserver();
  }

  moduleObserver() {
    let observer;
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          this.element.classList.add(this.observedClass);
        } else {
          this.element.classList.remove(this.observedClass);
        }
      });
    });

    observer.observe(header);

    this.element.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

export default observeScrollButton;
