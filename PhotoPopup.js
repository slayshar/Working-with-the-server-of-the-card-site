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
    await fetch(`http://localhost:5000/users/${USER_ID}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        avatar: `${this.link.value}`,
      }),
    });
  }
}
