export default function loadHomePage() {
    const content = document.querySelector("#content");
    
    const crimsonClover = document.createElement("h1");
    const restaurant = document.createElement("h1");

    crimsonClover.textContent = "Crimson Clover";
    restaurant.textContent = "Restaurant";

    content.appendChild(crimsonClover);
    content.appendChild(restaurant);
}