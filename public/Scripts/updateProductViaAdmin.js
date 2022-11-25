import { postProducts, getProducts, updateProduct } from "./productData.js";
import { getParameterByName } from "./Utils/utils.js"
let selectedProduct = await getProducts(`https://shoes-json.herokuapp.com/products?id=${getParameterByName('id')}`);
const updateBtn = document.querySelector('.update-product-btn');

selectedProduct = selectedProduct[0];

console.log(selectedProduct)

document.querySelector('.name').value = selectedProduct.name;
document.querySelector('.price').value = selectedProduct.price;
document.querySelector('.image').value = selectedProduct.image;
document.querySelector('.type').value = selectedProduct.type;
document.querySelector('#area').value = selectedProduct.description;

updateBtn.onclick = async () => {
    const name = document.querySelector('.name').value;
    const price = document.querySelector('.price').value;
    const image = document.querySelector('.image').value;
    const type = document.querySelector('.type').value; 
    const description = document.querySelector('#area').value;
    await updateProduct(getParameterByName('id'), {name, price, image, type, description});
    console.log({name, price, image, type, description});
    alert("Cập nhật sản phẩm thành công");
    window.location.replace('./admin.html');
}