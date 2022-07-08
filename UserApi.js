class UserApi {
  constructor() {
    this.usersUrl = `${BASE_URL}/${endpoints.users}`;
    this.id = USER_ID;
  }
  async loadUser() {
    let response = await fetch(`${this.usersUrl}/${this.id}`);
    let user = await response.json();
    return user;
  }
  async loadNewUser(name, about) {
    let response = await fetch(
      `http://localhost:5000/users/62a11004753707ba8cdc5b8f`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          name: `${name}`,
          about: `${about}`,
        }),
      }
    );
    console.log(response);
    let user = await response.json();
    return user;
  }
}
