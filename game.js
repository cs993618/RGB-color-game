var numberOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBut = document.querySelectorAll(".mode");
// var easy = document.querySelector("#easy");
// var hard = document.querySelector("#hard");


init();

function init(){
	setupModeBtn();
	setupSquares();
	reset();
}

function setupSquares(){
	for(var i = 0; i< squares.length; i++){
		squares[i].addEventListener("click",function(){
			var colorNow = this.style.backgroundColor;
			if(colorNow === pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				resetBtn.textContent= "Play Again?";
				changcolors(colorNow);
				h1.style.backgroundColor = colorNow;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}
function setupModeBtn(){
	for(i = 0; i < modeBut.length; i++){
		modeBut[i].addEventListener("click",function(){
			modeBut[0].classList.remove("selected");
			modeBut[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numberOfSquares = 3;
			}
			else{
				numberOfSquares = 6;
			}
		// if-else or code blow
		// 	this.textContent === "Easy" ? numberOfSquares = 3:
	 	// numberOfSquares = 6;
	 		reset();
			//figure out how many squares to show
			//pick new colors
			//pick a new pickedColor
			//update page to reflect changes
		})
	}
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color form array
	pickedColor = pickColor();
	//change colors of squares
	messageDisplay.textContent = "";
	colorDisplay.textContent = pickedColor;
	resetBtn.textContent = "New Colors";
	for(var i = 0; i< squares.length; i++){
		squares[i].style.display ="block";
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";	
}
// easy.addEventListener("click",function(){
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	numberOfSquares = 3;
// 	//generate all new colors
// 	colors = generateRandomColors(numberOfSquares);
// 	//pick a new random color form array
// 	pickedColor = pickColor();
// 	//change colors of squares
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i <squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else
// 		{
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hard.addEventListener("click",function(){
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	numberOfSquares = 6 ;
	// //generate all new colors
	// colors = generateRandomColors(numberOfSquares);
	// //pick a new random color form array
	// pickedColor = pickColor();
	// //change colors of squares
	// colorDisplay.textContent = pickedColor;
	// for(var i = 0; i <squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// 	squares[i].style.display = "block";
		
// 	}
// })

resetBtn.addEventListener("click",function(){
	reset();
});

colorDisplay.textContent = pickedColor ;



function changcolors(color){
	//loop through all squares
	for(var i = 0; i<squares.length ; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];

}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add num random colors to array
	for (i=0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());

	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r +", " +g +", "+b+")";

}