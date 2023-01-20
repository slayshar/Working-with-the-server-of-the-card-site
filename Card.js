class Card {
  constructor(name, link, likes, id) {
    this.name = name;
    this.link = link;
    this.likes = likes;
    this.card = null;
    this.id = id;
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
    this.sendLike();
  };

  remove = (event) => {
    if (window.confirm(`Удалить карточку безвозвратно?`) === true) {
      this.card.remove();
      this.delete();
    }
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
        <div><button class="place-card__like-icon"></button>
        <p class = "place-card__like-amount">${this.likes}</p></div>
      </div>`;
    this.card.insertAdjacentHTML('beforeend', template);
    this.addEventListeners();
  };
  async sendLike() {
    let response = await fetch(`${BASE_URL}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authorization: 'e5cf0ae6-c049-4812-8bb5-267f014b9213',
      },
      body: JSON.stringify({
        personId: '62a11004753707ba8cdc5b8f',
      }),
    });
  }
  async send() {
    let response = await fetch(`http://localhost:5000/cards`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authorization: 'e5cf0ae6-c049-4812-8bb5-267f014b9213',
      },
      body: JSON.stringify({
        name: `${this.name}`,
        link: `${this.link}`,
      }),
    });

    let user = await response.json();
    return user;
  }

  async delete() {
    let response = await fetch(`http://localhost:5000/cards/${this.id}`, {
      method: 'DELETE',
    });
  }

  render = () => {
    this.create();

    return this.card;
  };
}
