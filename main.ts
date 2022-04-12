let ledpas1 = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    for (let _index = 0; _index <= 8; _index++) {
        ledpas1.setPixelColor(_index - 1, neopixel.colors(NeoPixelColors.Red))
        ledpas1.show()
        basic.pause(1000)
        ledpas1.clear()
    }
    for (let _index = 0; _index <= 8; _index++) {
        ledpas1.setPixelColor(8 - _index, neopixel.colors(NeoPixelColors.Red))
        ledpas1.show()
        basic.pause(1000)
        ledpas1.clear()
    }
})
