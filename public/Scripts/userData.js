async function pushUsers(newUser) {
    await fetch("https://shoes-json.herokuapp.com/users", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newUser)
    })
    .then(response => response.json())

}

async function getUsers(url) {
    const response = await fetch(url);
    return response.json();
}


export { pushUsers, getUsers };