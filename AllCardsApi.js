class AllCardsApi {
  constructor() {
    this.cardsUrl = `${BASE_URL}/${endpoints.cards}`;
  }
  loadCards = () => {
    fetch(`${this.cardsUrl}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        data.forEach((card) => {
          const cardInstance = new Card(card.name, card.link);
          const cardNode = cardInstance.render();
          cardNode
            .querySelector(`.place-card__image`)
            .addEventListener(`click`, () => gettingUrl(cardInstance));
          cardArray.push(cardNode);
          const readyCard = new CardList(place, cardArray);
          readyCard.render();
        });
      })
      .catch((err) => {
        console.log(`Ошибка`);
      });
  };
}
