class UserNewApi {
  constructor(id) {
    this.usersUrl = `${BASE_URL}/${endpoints.users}`;
    this.id = id;
  }
  async loadNewUser(name, about) {
    let response = await fetch(`${this.usersUrl}/${this.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`,
      }),
    });
    let user = await response.json();
    return user;
  }
}
