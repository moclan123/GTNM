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

async function deleteProduct(id) {
    let url = "https://shoes-json.herokuapp.com/products/" + id;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    return response.json();
}

export { getProducts, postProducts, deleteProduct };