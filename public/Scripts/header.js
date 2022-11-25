import { getParameterByName } from "./Utils/utils.js";
import { getUsers } from "./userData.js";

let user = await getUsers(`https://shoes-json.herokuapp.com/users?id=${getParameterByName("id")}`);
user = user[0];

const userLink = document.querySelector(".user-link");
if(user == undefined) {
    userLink.innerHTML = `<a href="./login.html">Đăng nhập</a> / <a href="./signin.html">Đăng ký</a>`;
}

else {
    const navMenuLink = document.querySelectorAll('.nav_menu-link');
    console.log(navMenuLink)
    navMenuLink[0].setAttribute("href", `./index.html?id=${user.id}`);
    navMenuLink[1].setAttribute("href", `./about-us.html?id=${user.id}`);
    navMenuLink[2].setAttribute("href", `./index.html?id=${user.id}`);
    navMenuLink[5].setAttribute("href", `./news.html?id=${user.id}`);
    navMenuLink[8].setAttribute("href", `./contact.html?id=${user.id}`);
    userLink.innerHTML = `<a>Xin chào ${user.username}</a>`
}
