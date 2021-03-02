//Create a variable for dimension of sketchpad
let num = 16;
let boxWidth = (500/num) + 'px';
let boxHeight = (500/num) + 'px';

//Create variables for the creation of sketchpad
let sketchPadBox = document.querySelector('#sketchPadBox');
let div = document.createElement('div');

//Create function that adds sketchpad
function createSketch() {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            div = document.createElement('div');
            div.classList.add('box');
            div.style.width = boxWidth;
            div.style.height = boxHeight;
            sketchPadBox.appendChild(div);
        }
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
        if (input == null) {
            break;
        } else if (input == 0) {
            alert('Enter a digit from 1-64 range.');
            continue;
        } else if (input > 0 && input <= 64) {
            num = Math.round(input);
            boxWidth = (500/num) + 'px';
            boxHeight = (500/num) + 'px';   
            removeSketch();
            createSketch();
            break;              
        }          
    alert('Enter a digit from 1-64 range.')
    }
}

createSketch();
