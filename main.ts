input.onButtonPressed(Button.A, function () {
    lcd1602.putString(
    "Hello",
    0,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    lcd1602.clear()
})
led.enable(false)
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
