radio.onReceivedString(function (receivedString) {
    if (receivedString == "lumus") {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (receivedString == "off") {
        servos.P0.setAngle(0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (receivedString == "ALOJOMORA") {
        servos.P0.setAngle(160)
    }
})
radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P1, 0)
servos.P0.setAngle(0)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.pause(1000)
        if (input.isGesture(Gesture.LogoUp)) {
            radio.sendString("lumus")
        }
    }
    if (input.isGesture(Gesture.LogoUp)) {
        basic.pause(1000)
        if (input.isGesture(Gesture.LogoDown)) {
            radio.sendString("ALOJOMORA")
        }
    }
    if (input.isGesture(Gesture.Shake)) {
        radio.sendString("off")
    }
})
