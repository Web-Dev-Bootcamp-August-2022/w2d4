class Game {
	// the game class holds all the objects that the game 
	// needs
	constructor() {
		this.player = new Player()
	}
	preload() {
		this.player.image = loadImage('gustavo.png')
	}
	// here all the objects are drawn
	draw() {
		clear()
		this.player.draw()
	}
}

class Player {
	constructor() {
		this.x = 500
		this.y = 500
		this.width = 100
		this.height = 100
		this.image
	}
	draw() {
		image(this.image, this.x, this.y, this.width, this.height)
		// this is a P5 function as well
		// keyIsDown(keyCode)
		// while 'k' is pressed we move to the right 
		if (keyIsDown(75)) {
			this.moveRight()
		}
	}
	moveRight() {
		this.x += 10
	}
	moveLeft() {
		this.x -= 10
	}
	moveUp() {
		this.y -= 10
	}
	moveDown() {
		this.y += 10
	}
}

const game = new Game()

function preload() {
	game.preload()
}
function setup() {
	createCanvas(1000, 600)
}
function draw() {
	game.draw()
}

function keyPressed() {
	if (keyCode === 39) {
		// move the player to the right
		game.player.moveRight()
	}
	if (keyCode === 37) {
		game.player.moveLeft()
	}
	if (keyCode === 38) {
		game.player.moveUp()
	}
	if (keyCode === 40) {
		// move the player to the right
		game.player.moveDown()
	}

}