function addNewQuestion() {
  const form = document.querySelector("form.add-question");

  if (form) {
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
      clone.querySelector(
        ".tags"
      ).innerHTML = `<li>#${data.question_tags}</li>`;
      document.querySelector("section.wrapper").append(clone);
    }

    const countingFieldsets = document.querySelectorAll("fieldset.counting");

    countingFieldsets.forEach((element) => {
      let input = element.querySelector("textarea");
      let output = element.querySelector("span");
      input.addEventListener("input", () => {
        let currentLength = input.value.length;
        output.innerHTML = `${150 - currentLength} characters left`;
        observeBoxShadow(currentLength);
      });
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
  }
}

export { addNewQuestion };
