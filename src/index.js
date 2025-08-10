import './styles.css';
import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';

const content = document.querySelector("#content");
const home = document.querySelector("button.home");
const menu = document.querySelector("button.menu");
const contact = document.querySelector("button.contact");

home.addEventListener("click", () => {
    content.textContent = '';
    loadHomePage();
});

menu.addEventListener("click", () => {
    content.textContent = '';
    loadMenuPage();
});

contact.addEventListener("click", () => {
    content.textContent = '';
    loadContactPage();
});

loadHomePage();
