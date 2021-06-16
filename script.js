
// Defining the maximum amount of cells.

let matix = 64 * 64;
let gridItems = document.getElementById('grid');

function getRandomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

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

let sliderValue = document.getElementById("slider").value;
let root = document.documentElement

slider.addEventListener("input", (e) => {
    root.style.setProperty("--cells-default", "repeat(" + e.target.value + ", 1fr)")
    erase();
});


// Erase button.
// How many squares per side? (Maximum: 64)

function erase() {
    for (let cell of allCells) {
        cell.style.backgroundColor = "white";
    }
}

let eraseButton = document.getElementById("erase");
eraseButton.addEventListener("click", function() {
    let squares = prompt('How many squares per side? (Maximum: 64)');
    root.style.setProperty("--cells-default", "repeat(" + squares + ", 1fr)")
    erase();
})

// Colorful button.

let colorfulButton = document.getElementById("colorful");
colorfulButton.addEventListener("click", function() {
    colorize();
})

function colorize() {
    for (let cell of allCells) {
        cell.addEventListener("mouseenter", function() {
           this.style.backgroundColor = "#" + getRandomColor();
        })
    }
}

// Grey button.

let greyButton = document.getElementById("grey");
greyButton.addEventListener("click", function() {
    greyUsage();
})

function greyUsage() {
    for (let cell of allCells) {
        cell.addEventListener("mouseenter", function() {
           this.style.backgroundColor = "grey"
        })
    }
}