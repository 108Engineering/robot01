function doUP () {
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 0)
    basic.pause(1000)
}
function doFW () {
    PTKidsBITRobot.ForwardLINECount(
    Find_Line.Center,
    1,
    30,
    100,
    0.015,
    0.01
    )
    PTKidsBITRobot.ForwardTIME(
    200,
    20,
    50,
    0.015,
    0.01
    )
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
    doFW()
    doFW()
    doUDW()
    doGRIP()
    doUP()
    doFW()
    doFW()
    doUDW()
    doUnGrip()
    doUP()
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
