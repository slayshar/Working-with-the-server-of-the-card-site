class PhotoPopup {
  constructor(photo, form) {
    this.photo = photo;
    this.form = form;
    this.link = form.querySelector(`.photo__input_type_link-url`);
  }
  change = () => {
    this.photo.style.backgroundImage = `url(${this.link.value})`;
  };
}
