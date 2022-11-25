import { postProducts, getProducts } from "./productData.js";
import { getParameterByName } from "./Utils/utils.js";
let selectedProduct = await getProducts(`https://shoes-json.herokuapp.com/products?id=${getParameterByName('id')}`);
const addBtn = document.querySelector('.add-product-btn');

addBtn.onclick = async () => {
    const name = document.querySelector('.name').value;
    const price = document.querySelector('.price').value;
    const image = document.querySelector('.image').value;
    const type = document.querySelector('.type').value; 
    const description = document.querySelector('#area').value;
    await postProducts({name, price, image, type, description});
    console.log({name, price, image, type, description});
    alert("Thêm sản phẩm mới thành công");
    window.location.replace('./admin.html');
}
