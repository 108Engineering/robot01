function doUP () {
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 0)
    basic.pause(500)
}
function doFW () {
    PTKidsBITRobot.ForwardLINECount(
    Find_Line.Center,
    1,
    30,
    40,
    0.01,
    0.01
    )
    PTKidsBITRobot.ForwardTIME(
    400,
    20,
    20,
    0.01,
    0.01
    )
}
function doGrip () {
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . # . # .
        . # # # .
        . # # # .
        . # # # .
        . # . # .
        `)
    PTKidsBITRobot.servoWrite(Servo_Write.P12, 132)
    basic.pause(1000)
}
function doTurnRight () {
    PTKidsBITRobot.TurnLINE(
    Turn_Line.Right,
    20,
    Turn_Sensor.ADC3,
    500
    )
    basic.pause(1000)
}
function doTurnLeft () {
    PTKidsBITRobot.TurnLINE(
    Turn_Line.Left,
    20,
    Turn_Sensor.ADC2,
    500
    )
    basic.pause(1000)
}
function do_Place () {
    doDW()
    doUnGrip()
    doUP()
}
function doUnGrip () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # . . . #
        # # . # #
        # # . # #
        # # . # #
        # . . . #
        `)
    PTKidsBITRobot.servoWrite(Servo_Write.P12, 180)
    basic.pause(1000)
}
function doUturn () {
    doTurnLeft()
    doTurnLeft()
}
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    doUP()
    doUnGrip()
    music.playTone(622, music.beat(BeatFraction.Whole))
    doFW()
    doFW()
    doTurnLeft()
    doFW()
    doDW()
    doGrip()
    doUP()
    doFW()
    doTurnRight()
    doFW()
    doTurnRight()
    doFW()
    doFW()
    doTurnRight()
    doFW()
    doFW()
    doDW()
    doUnGrip()
    doUP()
    music.playMelody("C D E F G A B C5 ", 300)
})
function do_Pick () {
    doUP()
    doUnGrip()
    doDW()
    doGrip()
    doUP()
}
input.onButtonPressed(Button.B, function () {
    music.playMelody("G B A G C5 B A B ", 300)
    basic.pause(1000)
    doFW()
    doFW()
    doFW()
    doTurnRight()
    doFW()
    doFW()
    doTurnRight()
    doFW()
    doTurnRight()
    doFW()
    doFW()
    doFW()
    doFW()
    doTurnRight()
    doFW()
    doFW()
    doTurnRight()
    doFW()
    doTurnRight()
    doFW()
    doTurnLeft()
    doFW()
    doTurnRight()
    doFW()
    doFW()
})
function doDW () {
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 92)
    basic.pause(500)
}
PTKidsBITRobot.servoWrite(Servo_Write.P8, 0)
PTKidsBITRobot.servoWrite(Servo_Write.P12, 180)
PTKidsBITRobot.SensorCalibrate()
PTKidsBITRobot.setColor(NeoPixelColors.Violet, 100)
doGrip()
basic.pause(1000)
doUnGrip()
