import { getProducts, deleteProduct } from "./productData.js";
let products = await getProducts("https://shoes-json.herokuapp.com/products");
const col = document.querySelector('tbody');
const selectAll = document.querySelector('.select-all');
const deleteProductBtn = document.querySelector('.delete-product-btn');

document.querySelector(".admin-header-left span").textContent = " " + products.length;
products.forEach((product, index) => {
    col.innerHTML += `
    <tr>
    <td>${index + 1}</td>
    <td>${product.name}</td>
    <td>${product.type}</td>
    <td>${product.price}</td>
    <td><input type="checkbox" class="select-product" selectedProduct=${product.id}></td>
    <td><i class="fa-solid fa-pen-to-square edit"></i></td>
    </tr>
    `
});

selectAll.onchange = () => {
    const productCheckBoxs = document.querySelectorAll('.select-product');
    if(selectAll.checked) {
        productCheckBoxs.forEach(checkbox => checkbox.checked = true);
    }
    else {
        productCheckBoxs.forEach(checkbox => checkbox.checked = false);
    }
}

deleteProductBtn.onclick = () => {
    const productCheckBoxs = document.querySelectorAll('.select-product');
    productCheckBoxs.forEach(async product => {
        if(product.checked) await deleteProduct(product.getAttribute("selectedProduct"));
    })
}
