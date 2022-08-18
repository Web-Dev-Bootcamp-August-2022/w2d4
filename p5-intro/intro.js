// this preloads all the assets (images, sounds, etc)
let playerImage;
let playerX = 100;
function preload() {
	console.log('preload')
	// showing an image in P5
	// we first have to call loadImage() in preload()
	playerImage = loadImage('gustavo.png')
}
// this is used to setup the html canvas
function setup() {
	console.log('setup')
	createCanvas(1000, 600)
}
let x = 300
let direction = 2
// let y = 50
// this is the main draw function
// this gets called all the time by P5
function draw() {
	// console.log('i am drawing')
	// this draws a rectangle
	// x, y, width, height
	// let rectColor = color(0, 255, 0)
	// fill('blue')
	// stroke('blue')
	// rect(x, y, 50, 50)
	// fill('red')
	// rect(200, 200, 50, 50)
	// draw a line
	// line(startX, startY, endX, endY)
	// stroke('black')
	// line(0, 300, 1000, 300)

	// this clears the canvas 
	clear()
	// x += direction
	// if (x > 1000 - 100) {
	// 	// console.log('hits the wall')
	// 	// change direction
	// 	direction = - 2
	// }
	// circle(x, 50, 100)

	// fill('red')
	// circle(mouseX, mouseY, 100)

	// console.log(frameCount)
	// these values come from p5
	// console.log(mouseX, mouseY)

	// to render the image we call the function image()
	// image(img, x, y, width, height)
	image(playerImage, playerX, 100, 100, 100)
}

// this function is called whenever a key is pressed
function keyPressed() {
	// this variable is provided by P5
	console.log(keyCode)
	if (keyCode === 39) {
		// move the player to the right
		playerX += 10
	}
}