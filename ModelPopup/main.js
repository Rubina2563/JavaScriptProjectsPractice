const openModelBtn = document.querySelector(".open-modal");
const ModalBox = document.querySelector(".modal");
const closeBtn = document.querySelector(".button");
const ModalBackground = document.querySelector(".modal-background");

openModelBtn.addEventListener('click', () => {
    ModalBox.style.display = 'block'; 
});

closeBtn.addEventListener('click', () => {
    ModalBox.style.display='none'
})



ModalBackground.addEventListener("click", (event) => {
    console.log(event.target)
  if (event.target === ModalBackground) {
    ModalBox.style.display = "none";
  }
});