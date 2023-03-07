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

exports.create = async(userData) => {
    const {country, city, street, streetNumber, ...data} = userData;

    data.address = {
        country,
        city,
        street,
        streetNumber
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result.user;
};

exports.remove = async(userId) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    });

    const result = await response.json();
};

exports.edit = async(userId, userData) => {
    const {country, city, street, streetNumber, ...data} = userData;

    data.address = {
        country,
        city,
        street,
        streetNumber
    };

    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result.user;
};