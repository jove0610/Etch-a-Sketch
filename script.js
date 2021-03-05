//Create variables for dimension and box color of sketchpad
let num = 16;
let boxWidth = (500/num) + 'px';
let boxHeight = (500/num) + 'px';

//Create function that adds sketchpad
function createSketch() {
    const sketchPadBox = document.querySelector('#sketchPadBox');
    let div;
    for (let i = 0; i < (num*num); i++) {
        div = document.createElement('div');
        div.classList.add('box' + i);
        div.style.width = boxWidth;
        div.style.height = boxHeight;
        div.style.border = '1px solid black';
        div.style.boxSizing = 'border-box';
        sketchPadBox.appendChild(div);        
    }
}

//Create function that removes existing sketchpad
function removeSketch() {
    while (sketchPadBox.firstChild) {
            sketchPadBox.removeChild(sketchPadBox.firstChild);
    }
}

//Creates button for resizing the sketchpad
const sizeBtn = document.querySelector('#changeSizeButton');
sizeBtn.onclick = () => {
    let input;
    while (true) {
        input = prompt('Enter new size:');
        if (input == null) {    //If Cancel button is clicked          
            break;
        } 
        input = Number(input);
        if (input == 0) {    //If input is 0 or blank
            alert('Enter a digit from 1-64 range.');
            continue;
        } else if (input > 0 && input <= 64) {
            num = Math.round(input);
            boxWidth = (500/num) + 'px';
            boxHeight = (500/num) + 'px';   
            removeSketch();
            createSketch();
            changeBackgroundColorOnHover();
            break;              
        }          
    alert('Enter a digit from 1-64 range.')
    }
}

//Create function for generating random hex color
function getRandomColor() {
    let hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + hexArray[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Create function that changed SketchBox div background color
//to random on hover and maintains the background color
function changeBackgroundColorOnHover() {
    let boxClass = '.box'
    let loopName;
    for (let i = 0; i < (num*num); i++) {
        boxClass = '.box' + i
        loopName = document.querySelector(boxClass);   
        loopName.addEventListener('mouseover', (e) => {   
            className = "." + e.target.className;
            let changeColor = document.querySelector(className);
            changeColor.style.backgroundColor = getRandomColor();
        });
    }
}

//Create a clear button that removes the colors on sketchpad
const clearBtn = document.querySelector('#clearButton');
clearBtn.onclick = () => {
    removeSketch();
    createSketch();
    changeBackgroundColorOnHover();
}

createSketch();
changeBackgroundColorOnHover();