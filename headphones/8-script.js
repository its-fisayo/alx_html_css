document.addEventListener("DOMContentLoaded", function() {
    const openIcon = document.getElementById("open-menu");
    const closeIcon = document.getElementById("close-menu");
    const menu = document.getElementsByClassName("menu");
    let isOpen = false;

    function openMenu () {
        if(isOpen === false) {
        menu.style.cssText = 'block';
        closeIcon.style.display = 'flex';
        openIcon.style.display = 'none';

        isOpen = true;
        }
    }

    function closeMenu () {
        if(isOpen === true) {
        menu.style.cssText = 'none';
        closeIcon.style.display = 'none';
        openIcon.style.display = 'flex';

        isOpen = true;
        }
    }
});