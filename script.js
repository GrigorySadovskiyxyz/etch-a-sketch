
let gridItems = document.getElementsByClassName('grid');
let divCell = document.createElement('div');
console.log(gridItems)
for (let i = 0; i < 16; i++) {
    divCell.classList.add('cells');
    document.gridItems.appendChild(divCell);
}