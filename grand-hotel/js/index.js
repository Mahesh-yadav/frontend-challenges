const navLinks = document.querySelectorAll(".navigation-link");
const toggleMenuCheckbox = document.querySelector('#menu-icon-click');

for(const navLink of navLinks){
    navLink.addEventListener('click', () => {
        toggleMenuCheckbox.checked = !toggleMenuCheckbox.checked;
    });
}