const baseUrl = 'http://localhost:3005/api/users';

exports.getAll =  async() => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data.users;
}