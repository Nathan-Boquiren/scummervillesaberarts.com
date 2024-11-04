function navBarShow() {
    let navBar = document.querySelector('.navbar');
    let lineOne = document.querySelector('.line-1');
    let lineTwo = document.querySelector('.line-2');
    let lineThree = document.querySelector('.line-3');

    // Check if the menu is visible (right = 0) and toggle its visibility
    if (navBar.style.left === "0px") {
        navBar.style.left = "-60vw";

    // Hamburger menu 

        lineOne.style.transform = "rotate(0deg)";
        lineTwo.style.width = "30px";
        lineThree.style.transform = "rotate(0deg)";

    } else {
        navBar.style.left = "0"; // Show the menu
        lineOne.style.transform = "translateY(10px) rotate(45deg)";
        lineTwo.style.width = "0px";
        lineThree.style.transform = "translateY(-10px)rotate(-45deg)";
    }
}