// Variables start
    let navbar_ul = document.getElementById("navbar-ul");
    let open_menu = document.getElementById("open-menu");
    let close_menu_a = document.getElementById("close-menu-a");
    let logo = document.getElementById("logo");
    let welcome = document.getElementById("welcome");
    let services_container = document.getElementById("services-container");
    let delivery_container = document.getElementById("delivery-container");
    let team_container = document.getElementById("team-container");
    let contact = document.getElementById("contact");
    let footer = document.getElementById("footer");
    let menuToggle;
// Variables ends

// Function Open Mobile Menu starts
function openMenu(event) {
    navbar_ul.style.left = "0%";

    // Blur Elements on mobile menu toggle
    logo.style.filter = "blur(4px)";
    open_menu.style.filter = "blur(4px)";
    welcome.style.filter = "blur(4px)";
    services_container.style.filter = "blur(4px)";
    delivery_container.style.filter = "blur(4px)";
    team_container.style.filter = "blur(4px)";
    contact.style.filter = "blur(4px)";
    footer.style.filter = "blur(4px)";

    menuToggle = true; //Menu toggle set true

    event.stopPropagation(); // Stop propagation of open-menu function on unnecessary div and body
}
// Function Open Mobile Menu ends


// Function Close Mobile Menu starts
function closeMenu() {
    navbar_ul.style.left = "-100%";

    // UnBlur Elements on mobile menu toggle off
    logo.style.filter = "blur(0)";
    open_menu.style.filter = "blur(0)";
    welcome.style.filter = "blur(0)";
    services_container.style.filter = "blur(0)";
    delivery_container.style.filter = "blur(0)";
    team_container.style.filter = "blur(0)";
    contact.style.filter = "blur(0)";
    footer.style.filter = "blur(0)";

    menuToggle = false; // Menu toggle set false
}
// Function Close Mobile Menu ends


// Menu Tweaks starts
open_menu.addEventListener('click', openMenu); // Event listener for opening menu when clicked on open-menu

close_menu_a.addEventListener('click', closeMenu); // Event listener for closing menu when clicked on close-menu-a

navbar_ul.addEventListener('click', function(event){
        event.stopPropagation(); // Stop propagation of closeMenu() function(Added on body) on navbar_ul 
})

document.body.addEventListener("click", closeMenu); // Close menu when clicked on elements except navbar_ul

// Menu Tweaks ends

// Remove Mobile Menu on devices with width greater than 950px starts

    // Function Definition & Logic
    function remove_menu(media_width) {
        if (media_width.matches) {
            closeMenu();
        }
    }
    // Variable for defining media query width
    let media_width = window.matchMedia("(min-width:950px)");

    // Function call
    remove_menu(media_width);

    // Attach listener function on state changes
    media_width.addListener(remove_menu);

// Remove Mobile Menu on devices with width greater than 950px ends


// Remove mobile menu when escape key pressed starts
    window.addEventListener('keydown', function(event){
        if(event.key=="Escape"){
            closeMenu();
        }
    });

// Remove mobile menu when escape key pressed ends

// Remove Navigation Bar on Scroll Down starts
    let scroll1 = window.pageYOffset;
        window.onscroll = function(){
            let scroll2 = window.pageYOffset;
            if(menuToggle!=true){ // If menu toggle is not equal true, then only execute below :-
                if(scroll1 > scroll2 ){
                    document.querySelector('nav').style.top = '0';
                }
                else{
                    document.querySelector('nav').style.top = '-100px';
                    document.querySelector('ul').style.top = '0';
                }
                scroll1 = scroll2;
            }
        }
// Remove Navigation Bar on Scroll Down ends
