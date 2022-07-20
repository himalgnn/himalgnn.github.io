// Variables
let navbar_ul = document.getElementById("navbar-ul");
let logo = document.getElementById("logo");
let open_menu = document.getElementById("open-menu");
let welcome = document.getElementById("welcome");
let services_container = document.getElementById("services-container");
let delivery_container = document.getElementById("delivery-container");
let team_container = document.getElementById("team-container");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer");

// Function Open Mobile Menu 
function openMenu() {
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
}

// Function Close Mobile Menu 
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

}

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


// Remove mobile menu when escape key pressed
    window.addEventListener('keydown', function(event){
        if(event.key=="Escape"){
            closeMenu();
        }
    });

// Remove Navigation Bar on Scroll Down
    let scroll1 = window.pageYOffset;
        window.onscroll = function(){
            let scroll2 = window.pageYOffset;
            if(scroll1 > scroll2 ){
                document.querySelector('nav').style.top = '0';
            }
            else{
                document.querySelector('nav').style.top = '-100px';
            }
            scroll1 = scroll2;
        }