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
    }
}

btn.addEventListener("click", () => {
    getUserInput()
    checkIfString(getHeight, getWidth)
} )