//Create a variable for dimension and box color of sketchpad
let num = 5;
let boxWidth = (500/num) + 'px';
let boxHeight = (500/num) + 'px';
let hoverColor = '#FFFFFF';

//Create function that adds sketchpad
function createSketch() {
    let sketchPadBox = document.querySelector('#sketchPadBox');
    let div = document.createElement('div');
    for (let i = 0; i < (num*num); i++) {
        div = document.createElement('div');
        div.classList.add('box' + i);
        div.style.width = boxWidth;
        div.style.height = boxHeight;
        div.style.border = '1px solid green';
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
    let input = 2;
    while (true) {
        input = Number(prompt('Enter new size:'));
        if (input == null) {    //If Cancel button is clicked
            break;
        } else if (input == 0) {    //If input is blank
            alert('Enter a digit from 1-64 range.');
            continue;
        } else if (input > 0 && input <= 64) {
            num = Math.round(input);
            boxWidth = (500/num) + 'px';
            boxHeight = (500/num) + 'px';   
            removeSketch();
            createSketch();
            hover();
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

createSketch();
hover();
//Create variable for each SketchBox


function hover() {

    let boxClass = '.box'
    let loopName = 'sketchPad'
    for (let i = 0; i < (num*num); i++) {
    

        boxClass = '.box' + i
        loopName = 'sketchPad' + i
    
        loopName = document.querySelector(boxClass);
    
        loopName.addEventListener('mouseover', (e) => {   
            className = "." + e.target.className;
            console.log(className);
            let changeColor = document.querySelector(className);
            console.log(changeColor);
            changeColor.style.backgroundColor = getRandomColor();
            console.log('hello');
        });
    }
}

//Create a clear button that removes colors from all Sketch Box






color = getRandomColor();

console.log(color);