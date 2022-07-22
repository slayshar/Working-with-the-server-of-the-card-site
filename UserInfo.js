class UserInfo {
  constructor(form, callback) {
    this.callback = callback;
    this.form = form;
    this.usersUrl = `${BASE_URL}/${endpoints.users}`;
    this.nameFilled = document.querySelector(`.user-info__name`);
    this.jobFilled = document.querySelector(`.user-info__job`);
    this.name = this.form.querySelector(`.edit__input_type_name`);
    this.job = this.form.querySelector(`.edit__input_type_job`);
  }
  updateUserInfo() {
    this.nameFilled.textContent = this.name.value;
    this.jobFilled.textContent = this.job.value;
    this.callback(this.name.value, this.job.value);
  }
}
