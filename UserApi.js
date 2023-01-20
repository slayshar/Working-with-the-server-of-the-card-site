class UserApi {
  constructor() {
    this.usersUrl = `${BASE_URL}/${endpoints.users}/me`;
  }
  async loadUser() {
    let response = await fetch(this.usersUrl, {
      headers: { authorization: 'e5cf0ae6-c049-4812-8bb5-267f014b9213' },
    });
    let user = await response.json();
    return user;
  }
  async loadNewUser(name, about) {
    let response = await fetch(this.usersUrl, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        authorization: 'e5cf0ae6-c049-4812-8bb5-267f014b9213',
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
