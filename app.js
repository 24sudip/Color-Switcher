const body = document.body;
const switchBtn = document.querySelector(".switch");
const switchPara = document.querySelector(".color");

switchBtn.addEventListener('click', function() {
    let color1 = getRandomNum(); // red
    let color2 = getRandomNum(); // green
    let color3 = getRandomNum(); // blue

    const colorString = `rgb(${color1}, ${color2}, ${color3})`;
    // console.log(colorString);

    body.style.backgroundColor = colorString;
    switchPara.innerText = colorString;
    // const renderedText = htmlElement.innerText;
});

function getRandomNum() {
    return Math.floor(Math.random() * 256);
}
