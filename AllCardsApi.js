class AllCardsApi {
  constructor() {
    this.cardsUrl = `${BASE_URL}/${endpoints.cards}`;
  }
  loadCards = () => {
    fetch(`${this.cardsUrl}`, {
      headers: {
        authorization: 'e5cf0ae6-c049-4812-8bb5-267f014b9213',
      },
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        data.forEach((card) => {
          const cardInstance = new Card(
            card.name,
            card.link,
            card.likes.length,
            card._id
          );
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
