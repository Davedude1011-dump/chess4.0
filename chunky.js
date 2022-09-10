var gameOn = false

function gameStart() {
    var num = 1
    while (num <= 64) {
        document.getElementById(num).className = ""
        document.getElementById(num).classList.add("blank");
        num ++
    }

    document.getElementById(1).classList.remove("blank");
    document.getElementById(2).classList.remove("blank");;
    document.getElementById(3).classList.remove("blank");;
    document.getElementById(4).classList.remove("blank");
    document.getElementById(5).classList.remove("blank");
    document.getElementById(6).classList.remove("blank");;
    document.getElementById(7).classList.remove("blank");;
    document.getElementById(8).classList.remove("blank");
    document.getElementById(9).classList.remove("blank");
    document.getElementById(10).classList.remove("blank");
    document.getElementById(11).classList.remove("blank");
    document.getElementById(12).classList.remove("blank");
    document.getElementById(13).classList.remove("blank");
    document.getElementById(14).classList.remove("blank");
    document.getElementById(15).classList.remove("blank");
    document.getElementById(16).classList.remove("blank");
    document.getElementById(1).classList.add("whiteRook");
    document.getElementById(2).classList.add("whiteKnight");
    document.getElementById(3).classList.add("whiteBishop");
    document.getElementById(4).classList.add("whiteKing");
    document.getElementById(5).classList.add("whiteQueen");
    document.getElementById(6).classList.add("whiteBishop");
    document.getElementById(7).classList.add("whiteKnight");
    document.getElementById(8).classList.add("whiteRook");
    document.getElementById(9).classList.add("whitePawn");
    document.getElementById(10).classList.add("whitePawn");
    document.getElementById(11).classList.add("whitePawn");
    document.getElementById(12).classList.add("whitePawn");
    document.getElementById(13).classList.add("whitePawn");
    document.getElementById(14).classList.add("whitePawn");
    document.getElementById(15).classList.add("whitePawn");
    document.getElementById(16).classList.add("whitePawn");
    
    document.getElementById(49).classList.remove("blank");
    document.getElementById(50).classList.remove("blank");
    document.getElementById(51).classList.remove("blank");
    document.getElementById(52).classList.remove("blank");
    document.getElementById(53).classList.remove("blank");
    document.getElementById(54).classList.remove("blank");
    document.getElementById(55).classList.remove("blank");
    document.getElementById(56).classList.remove("blank");
    document.getElementById(57).classList.remove("blank");
    document.getElementById(58).classList.remove("blank");
    document.getElementById(59).classList.remove("blank");
    document.getElementById(60).classList.remove("blank");
    document.getElementById(61).classList.remove("blank");
    document.getElementById(62).classList.remove("blank");
    document.getElementById(63).classList.remove("blank");
    document.getElementById(64).classList.remove("blank");
    document.getElementById(49).classList.add("blackPawn");
    document.getElementById(50).classList.add("blackPawn");
    document.getElementById(51).classList.add("blackPawn");
    document.getElementById(52).classList.add("blackPawn");
    document.getElementById(53).classList.add("blackPawn");
    document.getElementById(54).classList.add("blackPawn");
    document.getElementById(55).classList.add("blackPawn");
    document.getElementById(56).classList.add("blackPawn");
    document.getElementById(57).classList.add("blackRook");
    document.getElementById(58).classList.add("blackKnight");
    document.getElementById(59).classList.add("blackBishop");
    document.getElementById(60).classList.add("blackKing");
    document.getElementById(61).classList.add("blackQueen");
    document.getElementById(62).classList.add("blackBishop");
    document.getElementById(63).classList.add("blackKnight");
    document.getElementById(64).classList.add("blackRook");

    if (gameOn === true) {
        gameOn = false
    }
    else {
        gameOn = true
    }

    if (gameOn === true) {
        document.querySelector(".centerText").textContent = "restart"
    }
}