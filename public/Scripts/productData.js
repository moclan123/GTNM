async function getProducts(url) {
    const response = await fetch(url);
    return response.json();
}

async function postProducts(data) {
    const response = await fetch("https://shoes-json.herokuapp.com/products", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json();
}

export { getProducts, postProducts };