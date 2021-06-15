
let matix = 50 * 50;
let gridItems = document.getElementById('grid');

for (let i = 0; i < matix; i++) {
    let div = document.createElement('div');
    div.className = 'cells';
    gridItems.appendChild(div);
}

let allCells = document.querySelectorAll(".cells");

(function makeGrey() {
    for (let cell of allCells) {
        cell.addEventListener("mouseenter", function() {
           this.style.backgroundColor = "grey";
        })
    }
})()

function erase() {
    for (let cell of allCells) {
        cell.style.backgroundColor = "white";
    }
}

let sliderValue = document.getElementById("slider")
let root = document.documentElement

slider.addEventListener("input", (e) => {
    root.style.setProperty("--cells-default", "repeat(" + e.target.value + ", 1fr)")
    erase();
});

let eraseButton = document.querySelector("button")
eraseButton.addEventListener("click", function() {
    erase();
})


