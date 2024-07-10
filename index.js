const accordions = document.querySelectorAll('.accordion'); // get the accordion
const backdrop = document.querySelector('.backdrop');

accordions.forEach(accordion => {
    // access the answer and the image from each accordion
    const icon = accordion.querySelector(".icon");
    const ans = accordion.querySelector(".answer");
    
    // adding a click eventListener to each accordion
    accordion.addEventListener("click", () => {
        ans.classList.toggle("active"); // adding the active class based on toggle

        // check if the accordion has been clicked
        if (ans.classList.contains("active")) {
            icon.src = "./assets/images/icon-minus.svg";
        } else {
            icon.src = "./assets/images/icon-plus.svg";
        }
    });
});

function changeBackground() {
    if (window.innerWidth <= 460) {
        backdrop.src = './assets/images/background-pattern-mobile.svg';
    } else {
        backdrop.src = './assets/images/background-pattern-desktop.svg';
    }
}

// calling the function to set the image based on current screen size
changeBackground();
window.addEventListener('resize', changeBackground);
