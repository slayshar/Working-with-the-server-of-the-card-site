class CardList {
  constructor(placeForCards, arrayCards) {
    this.arrayCards = arrayCards;
    this.place = placeForCards;
  }
  render() {
    this.arrayCards.forEach((card) => this.place.appendChild(card));
  }
}
