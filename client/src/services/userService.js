const baseUrl = 'http://localhost:3005/api/users';

exports.getAll = async() => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data.users;
}

exports.getById = async(userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const data = await response.json();

    return data.user;
}