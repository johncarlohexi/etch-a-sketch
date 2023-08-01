const box = document.querySelector(".box")
const btn = document.querySelector("#btn")

let getHeight;
let getWidth;

let gridHeight;
let gridWidth;


function getUserInput() {
    let promptHeight = window.prompt("Enter Height")
    let promptWidth = window.prompt("Enter Width")

    let promptGridHeight = window.prompt("Enter Grid Height")
    let promptGridWidth = window.prompt("Enter Grid Width")

    getHeight = Number(promptHeight)
    getWidth = Number(promptWidth)

    gridHeight = Number(promptGridHeight)
    gridWidth = Number(promptGridWidth)
}

function checkIfString(height, width, pHeight, pWidth) {
    if (isNaN(height) && isNaN(width) && isNaN(pWidth) && isNaN(pHeight)) {
    } else {
        String(getHeight)
        String(getWidth)
        return [height, width]
    }
}

const makeDiv = document.createElement("div")

function makeBox(height, width) {
    const removeBox = box.querySelector("div")
    if (removeBox) {
        box.removeChild(removeBox)
    }
    
    makeDiv.className = "grid-container"
    makeDiv.style.width =  width + "px"
    makeDiv.style.height = height + "px"
    makeDiv.style.border = "1px solid #000"
    box.appendChild(makeDiv)
}

let boxWidth = getHeight;


function makeGrid(gWidth, gHeight, boxWidth) {
    const removeGrid = makeDiv.querySelectorAll(".box-grid")
    removeGrid.forEach((grid) => {
        makeDiv.removeChild(grid)
    })

    for (let i = 0; i < boxWidth; i++) {
        const boxGrid = document.createElement("div")
        boxGrid.className = "box-grid"
        boxGrid.style.width =  gWidth + "px"
        boxGrid.style.height = gHeight + "px"
        boxGrid.style.border = "1px solid #000"
        makeDiv.appendChild(boxGrid.cloneNode(true));
    }
}

btn.addEventListener("click", () => {
    getUserInput()
    checkIfString(getHeight, getWidth)
    makeBox(getHeight, getWidth)
    boxWidth = getWidth;
    makeGrid(gridWidth, gridHeight, boxWidth)
} )