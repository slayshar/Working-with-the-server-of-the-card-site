class UserApi {
  constructor() {
    this.usersUrl = `${BASE_URL}/${endpoints.users}`;
  }
  loadUser = (id) => {
    fetch(`${this.usersUrl}/${id}`).then((result) => {
      return result.json();
    });
  };
}
