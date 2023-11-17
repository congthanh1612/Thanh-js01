var container = document.createElement("div");
container.classList.add("cell");
var colors = ['red','yellow','gray','blue','green','pink','black','purple','bisque','Azure',
                'red','yellow','gray','blue','green','pink','black','purple','bisque','Azure']
var shuffledColors = shuffleArray(colors.concat("orange")); 


var clickedSquares = [];

for (var i = 0; i < 20; i++) {
    var square = document.createElement("div");
    square.classList.add("square");
    square.style.backgroundColor = 'orange'; 
    container.appendChild(square);
    var orderNumber=document.createTextNode(i+1);
    square.appendChild(orderNumber);

    square.addEventListener("click", function (event) {
        var clickedSquare = event.target;

        if (!clickedSquares.includes(clickedSquare)) {
            clickedSquares.push(clickedSquare);
            var newColor = shuffledColors[clickedSquares.length - 1];
            clickedSquare.style.backgroundColor = newColor; 
        }
        if (clickedSquares.length === 2) {
            setTimeout(function () {
                clickedSquares.forEach(function (square) {
                    square.style.backgroundColor = "orange"; 
                }); 
                clickedSquares = [];
            }, 2000);
        }
    });
}
document.body.appendChild(container);

function generateRandomColors(numColors) {
    var colors = [];
    for (var i = 0; i < numColors; i++) {
        colors.push(getRandomColor());
    }
    return colors;
}

// Function to shuffle an array
function shuffleArray(array) {
    var shuffledArray = array.slice();
    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
