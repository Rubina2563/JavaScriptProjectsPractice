const themeBtn = document.querySelector(".them-btn");
const themeContainer = document.querySelector(".theme-container");

// themeBtn.addEventListener('click', () => {
//     if (themeContainer.classList.contains("dark")) {
//         themeContainer.classList.remove("dark")
//         themeContainer.classList.add("light")
//     } else {
//         themeContainer.classList.remove("light");
//         themeContainer.classList.add("dark")
//     }

// })

themeBtn.addEventListener('click', () => {
    if (themeContainer.getAttribute("data-theme")==='dark') {
        themeContainer.setAttribute("data-theme", "light");
    } else {
        themeContainer.setAttribute("data-theme", "dark");
    }
})