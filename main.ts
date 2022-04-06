input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showNumber(0)
    randomnum = randint(0, 10)
    if (randomnum == 0) {
        basic.showString("Dog")
    } else if (randomnum == 1) {
        basic.showString("Cat")
    } else if (randomnum == 2) {
        basic.showString("Fish")
    } else if (randomnum == 3) {
        basic.showString("Dragon")
    } else if (randomnum == 4) {
        basic.showString("Frog")
    }
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let randomnum = 0
basic.showString("Place against your forehead")
basic.forever(function () {
	
})
