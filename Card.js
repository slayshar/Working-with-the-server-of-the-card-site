class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
    this.card = null;
  }

  get Url() {
    return this.card
      .querySelector(`.place-card__image`)
      .style.backgroundImage.slice(4, -1)
      .replace(/"/g, '');
  }

  like = (event) => {
    this.card
      .querySelector('.place-card__like-icon')
      .classList.toggle(`place-card__like-icon_liked`);
  };

  remove = (event) => {
    this.card.remove();
    event.stopPropagation();
  };

  addEventListeners = () => {
    this.card
      .querySelector(`.place-card__like-icon`)
      .addEventListener(`click`, this.like);
    this.card
      .querySelector(`.place-card__delete-icon`)
      .addEventListener(`click`, this.remove);
  };

  create = () => {
    this.card = document.createElement(`div`);
    this.card.classList.add(`place-card`);
    const template = `
      <div class="place-card__image" style="background-image: url(${this.link})">
        <button class="place-card__delete-icon"></button>
      </div>
      <div class="place-card__description">
        <h3 class="place-card__name">${this.name}</h3>
        <button class="place-card__like-icon"></button>
      </div>`;
    this.card.insertAdjacentHTML('beforeend', template);
    this.addEventListeners();
  };

  async send() {
    let response = await fetch(`http://localhost:5000/cards`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name: `${this.name}`,
        link: `${this.link}`,
      }),
    });
    console.log(response);
    let user = await response.json();
    return user;
  }

  render = () => {
    this.create();
    return this.card;
  };
}
