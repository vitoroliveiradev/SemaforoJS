const img = document.querySelector("#image");
const buttons = document.querySelector("#buttons");
let colorIndex = 0;
let interval;

const trafficLight = e => {
    stopAutomatic();
    turnLights[e.target.id]();
}

const nextColor = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeAutomatic = () => {
    const colors = ["red", "yellow", "green"];
    turnLights[colors[ colorIndex ]]();
    nextColor();
}

const stopAutomatic = () => {
    clearInterval( interval );
}


const turnLights = {
    red: () => img.src = "./assets/img/red.png",
    yellow: () => img.src = "./assets/img/yellow.png",
    green: () => img.src = "./assets/img/green.png",
    automatic: () => interval = setInterval(changeAutomatic, 1000),
}

buttons.addEventListener("click", trafficLight)