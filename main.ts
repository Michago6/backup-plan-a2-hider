input.onButtonPressed(Button.A, function () {
    update = 0
    basic.pause(500)
    radio.setGroup(115)
    radio.sendNumber(20)
    basic.pause(500)
    update = 1
})
input.onButtonPressed(Button.B, function () {
    update = 0
    basic.pause(500)
    radio.setGroup(115)
    radio.sendNumber(30)
    basic.pause(500)
    update = 1
})
let update = 0
update = 1
radio.setGroup(115)
basic.showString("HIDE ME")
basic.forever(function () {
    if (update == 1) {
        radio.sendNumber(0)
    }
})
