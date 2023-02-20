function bookmarkCard() {
  const cards = document.querySelectorAll("section.card");

  if (cards === null) {
    return;
  }

  cards.forEach((card) => {
    const bookmarks = card.querySelector(".bookmark");

    card.addEventListener("click", function () {
      card.classList.add("bookmarked");
    });
  });
}

export { bookmarkCard };
