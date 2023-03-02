class observe {
  constructor() {
    this.elements = document.getElementsByClassName("effect_on");
    this.observedClass = "visible";

    if (this.elements.length) {
      this.moduleObserver();
    }
  }

  moduleObserver() {
    let options = { threshold: 0.45 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          entry.target.classList.add(this.observedClass);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    Array.from(this.elements).forEach((item) => {
      observer.observe(item);
    });
  }
}

export default observe;
