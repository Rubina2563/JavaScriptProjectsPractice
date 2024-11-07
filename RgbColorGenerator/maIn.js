const rgbButton = document.querySelector(".rgb-button");
const hexButton = document.querySelector(".hex-button");
const rgbClipBtn = document.querySelector(".rgb-clipboard");
const hexClipBtn = document.querySelector(".hex-clipboard");
const rgbContainer = document.querySelector(".rgb-generator");
const hexContainer = document.querySelector(".hex-generator");
const hexText=document.querySelector(".hex-text")
const redValue = document.querySelector("#red"); // Corrected selector
const greenValue = document.querySelector("#green");
const blueValue = document.querySelector("#blue");

rgbButton.addEventListener("click", () => {
  let redColorValue = redValue.value;
  let greenColorValue = greenValue.value;
    let blueColorValue = blueValue.value;
    const rgbValue = `rgb(${redColorValue},${greenColorValue},${blueColorValue})`;
  console.log(`rgb(${redColorValue},${greenColorValue},${blueColorValue})`);
  rgbContainer.style.backgroundColor = `rgb(${redColorValue},${greenColorValue},${blueColorValue})`;
rgbButton.style.color = `rgb(${redColorValue},${greenColorValue},${blueColorValue})`;
});

rgbClipBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(rgbContainer.style.backgroundColor);
    alert("color copied")
})

hexButton.addEventListener('click', () => {
    let charSet = `0123456789ABCDEF`;
    let outputValue = "#";

    for (let i = 0, char = charSet.length; i < 6; i++){
       outputValue+=charSet.charAt(Math.floor(Math.random()*char)) 
    }

    hexContainer.style.backgroundColor = `${outputValue}`;
    hexText.textContent = `${outputValue}`;
})

hexClipBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexText.textContent);
  alert("color copied");
});