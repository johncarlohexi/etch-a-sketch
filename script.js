const box = document.querySelector(".box")
const btn = document.querySelector("#btn")

let getHeight;
let getWidth;



function getUserInput() {
    let promptHeight = window.prompt("Enter Height")
    let promptWidth = window.prompt("Enter Width")

    getHeight = Number(promptHeight)
    getWidth = Number(promptWidth)
}

function checkIfString(height, width) {
    if (isNaN(height) && isNaN(width)) {
        console.log("Not a number")
    } else {
        console.log("its a number")
        String(getHeight)
        String(getWidth)
        return [height, width]
    }
}

function makeGrid(height, width) {
    const removeBox = box.querySelector("div")
    if (removeBox) {
        box.removeChild(removeBox)
    }
    
    const makeDiv = document.createElement("div")
    makeDiv.style.width =  height + "px"
    makeDiv.style.height = width + "px"
    makeDiv.style.border = "1px solid #000"
    box.appendChild(makeDiv)
}

btn.addEventListener("click", () => {
    getUserInput()
    checkIfString(getHeight, getWidth)
    makeGrid(getHeight, getWidth)
} )