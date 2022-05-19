const header = document.querySelector("header");

const navbar = document.createElement("div");
navbar.classList.add("navbar")
navbar.setAttribute("id", "everyday-navbar")

function addMenuItem(itemName)
{
    const menu_item = document.createElement("li");
    menu_item.innerHTML = itemName;
    menu_item.classList.add("menu-item");
    menu.appendChild(menu_item);
}

const menu = document.createElement("ul");
addMenuItem("Home");
addMenuItem("About");
addMenuItem("Contact");
addMenuItem("Help");

header.append(menu)