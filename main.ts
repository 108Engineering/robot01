function doUP () {
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 0)
    basic.pause(1000)
}
function doFW () {
    PTKidsBITRobot.ForwardLINECount(
    Find_Line.Center,
    1,
    30,
    60,
    0.015,
    0.01
    )
    PTKidsBITRobot.ForwardTIME(
    250,
    30,
    50,
    0.015,
    0.01
    )
}
function doTurnRight () {
    PTKidsBITRobot.TurnLINE(
    Turn_Line.Right,
    40,
    Turn_Sensor.Center,
    200
    )
    basic.pause(1000)
}
function doTurnLeft () {
    PTKidsBITRobot.TurnLINE(
    Turn_Line.Left,
    40,
    Turn_Sensor.Center,
    200
    )
    basic.pause(1000)
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
function doGRIP () {
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
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    doUP()
    doUnGrip()
    music.playTone(622, music.beat(BeatFraction.Whole))
    doFW()
    doFW()
    doTurnLeft()
    doFW()
    doUDW()
    doGRIP()
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
    doUDW()
    doUnGrip()
    doUP()
    music.playMelody("C D E F G A B C5 ", 300)
})
function doUDW () {
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 92)
}
PTKidsBITRobot.servoWrite(Servo_Write.P8, 0)
PTKidsBITRobot.servoWrite(Servo_Write.P12, 180)
PTKidsBITRobot.SensorCalibrate()
PTKidsBITRobot.setColor(NeoPixelColors.Violet, 100)
doGRIP()
basic.pause(1000)
doUnGrip()
