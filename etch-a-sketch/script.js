let grid = document.getElementById('grid');
let slider = document.getElementById('pixels');


let selectedColor = document.querySelector('input[name="color"]:checked').value;


createGrid();

function createGrid(){
    clear();
    let gridSize = slider.value;
    grid.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr)`);
    grid.style.gridTemplateRows = (`repeat(${gridSize}, 1fr)`);
    let totolGrids = gridSize*gridSize;
    
    for(i=0;i<totolGrids;i++){
        let newCell = document.createElement('div');
        newCell.addEventListener('mouseenter', draw);
        grid.appendChild(newCell);
    }
}

function clear(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

function draw(e){
    selectedColor = document.querySelector('input[name="color"]:checked').value;
    this.style.backgroundColor = `${selectedColor}`;
}

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearbtn);

function clearbtn(){
    clear();
    createGrid();
}
