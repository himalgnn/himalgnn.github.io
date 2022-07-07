// Variables
var navbar_ul = document.getElementById("navbar-ul");
var logo = document.getElementById("logo");
var open_menu = document.getElementById("open-menu");
var welcome = document.getElementById("welcome");
var services_container = document.getElementById("services-container");
var delivery_container = document.getElementById("delivery-container");
var team_container = document.getElementById("team-container");
var contact = document.getElementById("contact");
var footer = document.getElementById("footer");

// Function Open Menu 
function openMenu(){
    navbar_ul.style.left="0%";

    // Blur Elements on mobile Navbar toggle
    logo.style.filter="blur(4px)";
    open_menu.style.filter="blur(4px)";
    welcome.style.filter="blur(4px)";
    services_container.style.filter="blur(4px)";
    delivery_container.style.filter="blur(4px)";
    team_container.style.filter="blur(4px)";
    contact.style.filter="blur(4px)";
    footer.style.filter="blur(4px)";
    
    
}


// Function Close Menu 
function closeMenu(){
    navbar_ul.style.left="-100%";

    // UnBlur Elements on mobile Navbar toggle off
    logo.style.filter="blur(0)";
    open_menu.style.filter="blur(0)";
    welcome.style.filter="blur(0)";
    services_container.style.filter="blur(0)";
    delivery_container.style.filter="blur(0)";
    team_container.style.filter="blur(0)";
    contact.style.filter="blur(0)";
    footer.style.filter="blur(0)";
    
}

