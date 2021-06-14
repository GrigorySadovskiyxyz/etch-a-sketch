
let matix = (16 * 16);
let height = 16 * 30
console.log(matix, height)

let gridItems = document.getElementById('grid');
console.log(gridItems)

for (let i = 0; i < matix; i++) {
    let div = document.createElement('div');
    div.className = 'cells';
    gridItems.appendChild(div);
}


console.log(document.getElementsByClassName("cells").length)
// document.documentElement.style.setProperty('--main-grid', '#YOURCOLOR');


let allCells = document.querySelectorAll(".cells");

for (let cell of allCells) {
    cell.addEventListener("mouseenter", function() {
       this.style.backgroundColor = "grey";
    })
}
