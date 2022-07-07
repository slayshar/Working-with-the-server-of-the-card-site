class UserApi {
  constructor() {
    this.usersUrl = `${BASE_URL}/${endpoints.users}`;
  }
  async loadUser(id) {
    let response = await fetch(`${this.usersUrl}/${id}`);
    let user = await response.json();
    return user;
  }
}
