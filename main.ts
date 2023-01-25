radio.onReceivedString(function (receivedString) {
    if (receivedString == "lumus") {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    if (receivedString == "off") {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.pause(1000)
        if (input.isGesture(Gesture.LogoUp)) {
            radio.sendString("lumus")
        }
    }
    if (input.isGesture(Gesture.Shake)) {
        radio.sendString("off")
    }
})
