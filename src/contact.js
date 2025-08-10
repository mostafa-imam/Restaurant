export default function loadContactPage() {
    const content = document.querySelector("#content");

    const contactUs = document.createElement('div');
    contactUs.classList.add("contactUs");
    
    const contactUsH2 = document.createElement("h2");
    contactUsH2.textContent = "Contact Us";
    contactUsH2.classList.add("contactUsH2")
    
    const contactUsPhone = document.createElement("p");
    contactUsPhone.textContent = "+43 4444-444-444";
    contactUsPhone.classList.add("contactUsPhone")

    const contactUsEmail = document.createElement("p");
    contactUsEmail.textContent = "crimsonclover@restaurant.com";
    contactUsEmail.classList.add("contactUsEmail");

    contactUs.append(contactUsH2, contactUsPhone, contactUsEmail);

    const address = document.createElement('div');
    address.classList.add("address");
    
    const addressH2 = document.createElement("h2");
    addressH2.textContent = "Address";
    addressH2.classList.add("addressH2");

    const addressLocation = document.createElement("p");
    addressLocation.textContent = "48 Bd Arago, 75013 Paris, France";
    addressLocation.classList.add("addressLocation");

    address.append(addressH2, addressLocation);

    content.append(contactUs, address);
}