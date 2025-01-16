new QRCode(document.getElementById("qrcode"), {
    text: "https://birth.com/birthday.html",  //
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
