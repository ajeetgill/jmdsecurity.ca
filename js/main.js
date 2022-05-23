let sideNav = document.querySelector("#mySideNav");
let openBtn = document.querySelector('#menu-open');
let closeBtn = document.querySelector("#menu-close");

openBtn.addEventListener('click', () => {
    sideNav.classList.add('animation');
    sideNav.style.width = "100%";
});
closeBtn.addEventListener('click', closeMenu);
// closeBtn.addEventListener('click', () => {
//     sideNav.style.width = "0";
//     sideNav.classList.remove('animation');
// });

function closeMenu() {
    if (window.outerWidth > 649) return;
    sideNav.style.width = "0";
    sideNav.classList.remove('animation');
}


// below the fold
function focusOnMe(el) {
    const elementToHighlight = document.querySelector(el.attributes.href.value);
    elementToHighlight.addEventListener("animationend", function () {
        this.classList.remove("highlight");
    });
    elementToHighlight.classList.add('highlight');
}


// function logContact(el) {
//     const elId = el.attributes.id.value;
//     const contactMethod = elId == 'js-log-phone' ? 'phone_log' : 'email_log';
//     analytics.logEvent('contact-via-fab', { "method": contactMethod });
// }