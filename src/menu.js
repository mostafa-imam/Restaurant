import menuItem1 from './assets/menuItem1.png';
import menuItem2 from "./assets/menuItem2.png";
import menuItem3 from "./assets/menuItem3.png";

function createMenuItem(containerClass, textClass, url) {
    const outerContainer = document.createElement("div");
    outerContainer.classList.add("item", containerClass);

    const image = document.createElement("img");
    image.setAttribute("alt", 'plate with food');
    image.src = url;

    const textContainer = document.createElement("div");
    textContainer.classList.add(textClass);

    const h2 = document.createElement("h2");
    h2.textContent = "Lorem, ipsum";

    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, obcaecati architecto nulla distinctio aliquam doloribus vitae maiores debitis unde eligendi neque officiis repudiandae voluptatibus magnam quis quo, autem nobis!";

    textContainer.appendChild(h2);
    textContainer.appendChild(p);

    outerContainer.appendChild(image);
    outerContainer.appendChild(textContainer);

    return outerContainer;
}

export default function loadMenuPage() {
    const content = document.querySelector("#content");
    content.classList.add("menuContent")

    const item1 = createMenuItem("item1", "textContainer1", menuItem1);
    const item2 = createMenuItem("item2", "textContainer2", menuItem2);
    const item3 = createMenuItem("item3", "textContainer3", menuItem3);

    content.appendChild(item1);
    content.appendChild(item2);
    content.appendChild(item3);
}