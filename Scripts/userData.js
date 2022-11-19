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

export default await fetch("https://shoes-json.herokuapp.com/users")
    .then(response => response.json())

export { pushUsers };