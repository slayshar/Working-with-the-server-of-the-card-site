class PhotoPopup {
  constructor(photo, form) {
    this.photo = photo;
    this.form = form;
    this.link = form.querySelector(`.photo__input_type_link-url`);
  }
  change = () => {
    this.photo.style.backgroundImage = `url(${this.link.value})`;
  };
  async load() {
    await fetch(`${BASE_URL}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authorization: 'e5cf0ae6-c049-4812-8bb5-267f014b9213',
      },
      body: JSON.stringify({
        avatar: `${this.link.value}`,
      }),
    });
  }
}
