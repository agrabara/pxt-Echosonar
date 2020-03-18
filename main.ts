let distance = 0
basic.showIcon(IconNames.Happy)
I2C_LCD1602.LcdInit(63)
I2C_LCD1602.BacklightOff()
I2C_LCD1602.ShowString("Hello!", 0, 0)
I2C_LCD1602.BacklightOn()
basic.pause(1000)
I2C_LCD1602.ShowString("Sonar    ", 0, 0)
basic.pause(1000)
I2C_LCD1602.clear()
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    //distance = Math.idiv(pins.pulseIn(DigitalPin.P1, PulseValue.High, 300 * 58), 58)
    distance = Math.idiv(pins.pulseIn(DigitalPin.P1, PulseValue.High), 58)
    basic.pause(300)
    I2C_LCD1602.ShowString("Distance:       ", 0, 0)
    I2C_LCD1602.ShowNumber(distance, 9, 0)
})
