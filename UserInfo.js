class UserInfo {
  constructor(form) {
    this.form = form;
  }
  setUserInfo() {
    this.name = document.querySelector(`.user-info__name`);
    this.job = document.querySelector(`.user-info__job`);
  }
  updateUserInfo() {
    this.setUserInfo();
    this.name.textContent = this.form.querySelector(
      `.edit__input_type_name`
    ).value;
    this.job.textContent = this.form.querySelector(
      `.edit__input_type_job`
    ).value;
  }
}
