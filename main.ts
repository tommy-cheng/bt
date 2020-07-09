bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    RXData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (RXData.compare("F") == 0) {
        basic.showString("F")
    } else if (RXData.compare("B") == 0) {
        basic.showString("B")
    } else if (RXData.compare("R") == 0) {
        basic.showString("R")
    } else if (RXData.compare("L") == 0) {
        basic.showString("L")
    } else if (RXData.compare("S") == 0) {
        basic.showString("S")
    } else {
        basic.showString(RXData)
    }
})
let RXData = ""
bluetooth.startAccelerometerService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
bluetooth.startUartService()
basic.showLeds(`
    . . # . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
