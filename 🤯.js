var firstClickPiece = ""
var firstClickPiecePlace = 0

var whitePieces = [
    "whitePawn",
    "whiteRook",
    "whiteKnight",
    "whiteBishop",
    "whiteKing",
    "whiteQueen"
]
var blackPieces = [
    "blackPawn",
    "blackRook",
    "blackKnight",
    "blackBishop",
    "blackKing",
    "blackQueen"
]



function blackPawnMove(piece_id) {
    if (firstClickPiecePlace - piece_id === 8 || firstClickPiecePlace - piece_id === 0 || firstClickPiecePlace - piece_id === 16 && piece_id > 32) {
        piecePlace(piece_id)
    }
    if (piece_id < 9) {
        document.getElementById(piece_id).className = ""
        document.getElementById(piece_id).classList.add("blackQueen")
    }
    bugFix(piece_id)
}
function blackPawnAttack(piece_id) {
    if (whitePieces.includes(document.getElementById(piece_id).className)) {
        if (firstClickPiecePlace - piece_id === 9 || firstClickPiecePlace - piece_id === 7) {
            document.getElementById(piece_id).className = ""
            piecePlace(piece_id)
            if (piece_id < 9) {
                document.getElementById(piece_id).className = ""
                document.getElementById(piece_id).classList.add("blackQueen")
            }
        }
        bugFix(piece_id)
    }
}
function whitePawnMove(piece_id) {
    if (piece_id - firstClickPiecePlace === 8 || firstClickPiecePlace - piece_id === 0 || piece_id - firstClickPiecePlace === 16 && piece_id < 33) {
        piecePlace(piece_id)
    }
    if (piece_id > 56) {
        document.getElementById(piece_id).className = ""
        document.getElementById(piece_id).classList.add("whiteQueen")
    }
    bugFix(piece_id)
}
function whitePawnAttack(piece_id) {
    if (blackPieces.includes(document.getElementById(piece_id).className)) {
        if (piece_id - firstClickPiecePlace === 9 || piece_id - firstClickPiecePlace === 7) {
            document.getElementById(piece_id).className = ""
            piecePlace(piece_id)
            if (piece_id > 56) {
                document.getElementById(piece_id).className = ""
                document.getElementById(piece_id).classList.add("whiteQueen")
            }
        }
        bugFix(piece_id)
    }
}

function rookMove(piece_id) {
    var allowedSquares = [
        -64,
        -56,
        -48,
        -40,
        -32,
        -24,
        -16,
        -8,
        0,
        8,
        16,
        24,
        32,
        40,
        48,
        56,
        64,
    ]

    var oldRowEstimate = Number(String(firstClickPiecePlace / 8)[0]) + 1
    if (Number.isInteger(firstClickPiecePlace / 8)) {
        oldRowEstimate -= 1
    }

    var rowEstimate = Number(String(piece_id / 8)[0]) + 1
    if (Number.isInteger(piece_id / 8)) {
        rowEstimate -= 1
    }

    if ((piece_id <= piece_id && piece_id >= (firstClickPiecePlace + 8)) && oldRowEstimate === rowEstimate || (piece_id <= piece_id && piece_id >= (firstClickPiecePlace - 8)) && oldRowEstimate === rowEstimate) {
        piecePlace(piece_id)
    }

    if (allowedSquares.includes((firstClickPiecePlace - piece_id))) {
        piecePlace(piece_id)
    }

    bugFix(piece_id)
}
function blackRookAttack(piece_id) {
    if (whitePieces.includes(document.getElementById(piece_id).className)) {
        var allowedSquares = [
            -64,
            -56,
            -48,
            -40,
            -32,
            -24,
            -16,
            -8,
            0,
            8,
            16,
            24,
            32,
            40,
            48,
            56,
            64,
        ]
    
        var oldRowEstimate = Number(String(firstClickPiecePlace / 8)[0]) + 1
        if (Number.isInteger(firstClickPiecePlace / 8)) {
            oldRowEstimate -= 1
        }
    
        var rowEstimate = Number(String(piece_id / 8)[0]) + 1
        if (Number.isInteger(piece_id / 8)) {
            rowEstimate -= 1
        }
    
        if ((piece_id <= piece_id && piece_id >= (firstClickPiecePlace + 8)) && oldRowEstimate === rowEstimate || (piece_id <= piece_id && piece_id >= (firstClickPiecePlace - 8)) && oldRowEstimate === rowEstimate) {
            piecePlace(piece_id)
        }
    
        if (allowedSquares.includes((firstClickPiecePlace - piece_id))) {
            document.getElementById(piece_id).className = ""
            document.getElementById(piece_id).classList.add("blackRook");
            firstClickPiece = ""
        }
    
        bugFix(piece_id)
    }
}
function whiteRookAttack(piece_id) {
    if (blackPieces.includes(document.getElementById(piece_id).className)) {
        var allowedSquares = [
            -64,
            -56,
            -48,
            -40,
            -32,
            -24,
            -16,
            -8,
            0,
            8,
            16,
            24,
            32,
            40,
            48,
            56,
            64,
        ]

        var oldRowEstimate = Number(String(firstClickPiecePlace / 8)[0]) + 1
        if (Number.isInteger(firstClickPiecePlace / 8)) {
            oldRowEstimate -= 1
        }

        var rowEstimate = Number(String(piece_id / 8)[0]) + 1
        if (Number.isInteger(piece_id / 8)) {
            rowEstimate -= 1
        }

        if ((piece_id <= piece_id && piece_id >= (firstClickPiecePlace + 8)) && oldRowEstimate === rowEstimate || (piece_id <= piece_id && piece_id >= (firstClickPiecePlace - 8)) && oldRowEstimate === rowEstimate) {
            piecePlace(piece_id)
        }

        if (allowedSquares.includes((firstClickPiecePlace - piece_id))) {
            document.getElementById(piece_id).className = ""
            document.getElementById(piece_id).classList.add("whiteRook");
            firstClickPiece = ""
        }

        bugFix(piece_id)
    }
}

function knightMove(piece_id) {
    var knightMovements = [
        0,
        10,
        17,
        15,
        6,
        -10,
        -17,
        -15,
        -6
    ]
    if (knightMovements.includes(firstClickPiecePlace - piece_id)) {
        piecePlace(piece_id)
    }
    bugFix(piece_id)
}
function blackKnightAttack(piece_id) {
    if (whitePieces.includes(document.getElementById(piece_id).className)) {
        var knightMovements = [
            0,
            10,
            17,
            15,
            6,
            -10,
            -17,
            -15,
            -6
        ]
        if (knightMovements.includes(firstClickPiecePlace - piece_id)) {
            piecePlace(piece_id)
        }
        bugFix(piece_id)
    }
}
function whiteKnightAttack(piece_id) {
    if (blackPieces.includes(document.getElementById(piece_id).className)) {
        var knightMovements = [
            0,
            10,
            17,
            15,
            6,
            -10,
            -17,
            -15,
            -6
        ]
        if (knightMovements.includes(firstClickPiecePlace - piece_id)) {
            piecePlace(piece_id)
        }
        bugFix(piece_id)
    }
}

function bishopMove(piece_id) {
    var bishopMovements = [
        0,
        9,
        18,
        27,
        36,
        45,
        54,
        63,
        7,
        14,
        21,
        28,
        35,
        42,
        49,
        -9,
        -18,
        -27,
        -36,
        -45,
        -54,
        -63,
        -7,
        -14,
        -21,
        -28,
        -35,
        -42,
        -49,
    ]
    if (bishopMovements.includes(firstClickPiecePlace - piece_id)) {
        piecePlace(piece_id)
    }
    bugFix(piece_id)
}
function blackBishopAttack(piece_id) {
    if (whitePieces.includes(document.getElementById(piece_id).className)) {
        var bishopMovements = [
            0,
            9,
            18,
            27,
            36,
            45,
            54,
            63,
            7,
            14,
            21,
            28,
            35,
            42,
            49,
            -9,
            -18,
            -27,
            -36,
            -45,
            -54,
            -63,
            -7,
            -14,
            -21,
            -28,
            -35,
            -42,
            -49,
        ]
        if (bishopMovements.includes(firstClickPiecePlace - piece_id)) {
            piecePlace(piece_id)
        }
        bugFix(piece_id)
    }
}
function whiteBishopAttack(piece_id) {
    if (blackPieces.includes(document.getElementById(piece_id).className)) {
        var bishopMovements = [
            0,
            9,
            18,
            27,
            36,
            45,
            54,
            63,
            7,
            14,
            21,
            28,
            35,
            42,
            49,
            -9,
            -18,
            -27,
            -36,
            -45,
            -54,
            -63,
            -7,
            -14,
            -21,
            -28,
            -35,
            -42,
            -49,
        ]
        if (bishopMovements.includes(firstClickPiecePlace - piece_id)) {
            piecePlace(piece_id)
        }
        bugFix(piece_id)
    }
}

function kingMove(piece_id) {
    var kingMovements = [
        -9,
        -8,
        -7,
        0,
        1,
        9,
        8,
        7,
        -1
    ]

    if (kingMovements.includes((firstClickPiecePlace - piece_id))) {
        piecePlace(piece_id)
    }

    bugFix(piece_id)
}
function blackKingAttack(piece_id) {
    if (whitePieces.includes(document.getElementById(piece_id).className)) {
        var kingMovements = [
            -9,
            -8,
            -7,
            0,
            1,
            9,
            8,
            7,
            -1
        ]

        if (kingMovements.includes((firstClickPiecePlace - piece_id))) {
            piecePlace(piece_id)
        }

        bugFix(piece_id)
    }
}
function whiteKingAttack(piece_id) {
    if (blackPieces.includes(document.getElementById(piece_id).className)) {
        var kingMovements = [
            -9,
            -8,
            -7,
            0,
            1,
            9,
            8,
            7,
            -1
        ]

        if (kingMovements.includes((firstClickPiecePlace - piece_id))) {
            piecePlace(piece_id)
        }

        bugFix(piece_id)
    }
}

function queenMove(piece_id) {
    var bishopMovements = [
        0,
        9,
        18,
        27,
        36,
        45,
        54,
        63,
        7,
        14,
        21,
        28,
        35,
        42,
        49,
        -9,
        -18,
        -27,
        -36,
        -45,
        -54,
        -63,
        -7,
        -14,
        -21,
        -28,
        -35,
        -42,
        -49,
    ]
    var allowedSquares = [
        -64,
        -56,
        -48,
        -40,
        -32,
        -24,
        -16,
        -8,
        0,
        8,
        16,
        24,
        32,
        40,
        48,
        56,
        64,
    ]

    var oldRowEstimate = Number(String(firstClickPiecePlace / 8)[0]) + 1
    if (Number.isInteger(firstClickPiecePlace / 8)) {
        oldRowEstimate -= 1
    }

    var rowEstimate = Number(String(piece_id / 8)[0]) + 1
    if (Number.isInteger(piece_id / 8)) {
        rowEstimate -= 1
    }

    if ((piece_id <= piece_id && piece_id >= (firstClickPiecePlace + 8)) && oldRowEstimate === rowEstimate || (piece_id <= piece_id && piece_id >= (firstClickPiecePlace - 8)) && oldRowEstimate === rowEstimate) {
        piecePlace(piece_id)
    }

    else if (allowedSquares.includes((firstClickPiecePlace - piece_id)) || bishopMovements.includes(firstClickPiecePlace - piece_id)) {
        piecePlace(piece_id)
    }

    bugFix(piece_id)
}
function blackQueenAttack(piece_id) {
    if (whitePieces.includes(document.getElementById(piece_id).className)) {
        var bishopMovements = [
            0,
            9,
            18,
            27,
            36,
            45,
            54,
            63,
            7,
            14,
            21,
            28,
            35,
            42,
            49,
            -9,
            -18,
            -27,
            -36,
            -45,
            -54,
            -63,
            -7,
            -14,
            -21,
            -28,
            -35,
            -42,
            -49,
        ]
        var allowedSquares = [
            -64,
            -56,
            -48,
            -40,
            -32,
            -24,
            -16,
            -8,
            0,
            8,
            16,
            24,
            32,
            40,
            48,
            56,
            64,
        ]

        var oldRowEstimate = Number(String(firstClickPiecePlace / 8)[0]) + 1
        if (Number.isInteger(firstClickPiecePlace / 8)) {
            oldRowEstimate -= 1
        }

        var rowEstimate = Number(String(piece_id / 8)[0]) + 1
        if (Number.isInteger(piece_id / 8)) {
            rowEstimate -= 1
        }

        if ((piece_id <= piece_id && piece_id >= (firstClickPiecePlace + 8)) && oldRowEstimate === rowEstimate || (piece_id <= piece_id && piece_id >= (firstClickPiecePlace - 8)) && oldRowEstimate === rowEstimate) {
            piecePlace(piece_id)
        }

        else if (allowedSquares.includes((firstClickPiecePlace - piece_id)) || bishopMovements.includes(firstClickPiecePlace - piece_id)) {
            piecePlace(piece_id)
        }

        bugFix(piece_id)
    }
}
function whiteQueenAttack(piece_id) {
    if (blackPieces.includes(document.getElementById(piece_id).className)) {
        var bishopMovements = [
            0,
            9,
            18,
            27,
            36,
            45,
            54,
            63,
            7,
            14,
            21,
            28,
            35,
            42,
            49,
            -9,
            -18,
            -27,
            -36,
            -45,
            -54,
            -63,
            -7,
            -14,
            -21,
            -28,
            -35,
            -42,
            -49,
        ]
        var allowedSquares = [
            -64,
            -56,
            -48,
            -40,
            -32,
            -24,
            -16,
            -8,
            0,
            8,
            16,
            24,
            32,
            40,
            48,
            56,
            64,
        ]

        var oldRowEstimate = Number(String(firstClickPiecePlace / 8)[0]) + 1
        if (Number.isInteger(firstClickPiecePlace / 8)) {
            oldRowEstimate -= 1
        }

        var rowEstimate = Number(String(piece_id / 8)[0]) + 1
        if (Number.isInteger(piece_id / 8)) {
            rowEstimate -= 1
        }

        if ((piece_id <= piece_id && piece_id >= (firstClickPiecePlace + 8)) && oldRowEstimate === rowEstimate || (piece_id <= piece_id && piece_id >= (firstClickPiecePlace - 8)) && oldRowEstimate === rowEstimate) {
            piecePlace(piece_id)
        }

        else if (allowedSquares.includes((firstClickPiecePlace - piece_id)) || bishopMovements.includes(firstClickPiecePlace - piece_id)) {
            piecePlace(piece_id)
        }

        bugFix(piece_id)
    }
}


function piecePlace(piece_id) {
    document.getElementById(piece_id).className = ""
    document.getElementById(piece_id).classList.add(firstClickPiece);
    firstClickPiece = ""
}

function bugFix(piece_id) {
    if (document.getElementById(piece_id).className === "") {
        document.getElementById(piece_id).classList.add("blank")
        document.getElementById(firstClickPiecePlace).className = ""
        document.getElementById(firstClickPiecePlace).classList.add(firstClickPiece)
        firstClickPiece = ""
    }
}

function pieceClick(piece_id) {

    if (document.getElementById(piece_id).className != "blank") {
        if (firstClickPiece === "") {
            firstClickPiece = document.getElementById(piece_id).className
            firstClickPiecePlace = piece_id
            document.getElementById(piece_id).className = ""
            document.getElementById(piece_id).classList.add("blank")
        }
        else {
            if (firstClickPiece === "blackPawn") {
                blackPawnAttack(piece_id)
            }
            if (firstClickPiece === "whitePawn") {
                whitePawnAttack(piece_id)
            }

            if (firstClickPiece === "blackRook") {
                blackRookAttack(piece_id)
            }
            if (firstClickPiece === "whiteRook") {
                whiteRookAttack(piece_id)
            }

            if (firstClickPiece === "blackKnight") {
                blackKnightAttack(piece_id)
            }
            if (firstClickPiece === "whiteKnight") {
                whiteKnightAttack(piece_id)
            }

            if (firstClickPiece === "blackBishop") {
                blackBishopAttack(piece_id)
            }
            if (firstClickPiece === "whiteBishop") {
                whiteBishopAttack(piece_id)
            }

            if (firstClickPiece === "blackKing") {
                blackKingAttack(piece_id)
            }
            if (firstClickPiece === "whiteKing") {
                whiteKingAttack(piece_id)
            }

            if (firstClickPiece === "blackQueen") {
                blackQueenAttack(piece_id)
            }
            if (firstClickPiece === "whiteQueen") {
                whiteQueenAttack(piece_id)
            }
        }
    }

    else if (document.getElementById(piece_id).className === "blank" && firstClickPiece != "") {
        document.getElementById(piece_id).className = ""
        if (firstClickPiece === "blackPawn") {
            blackPawnMove(piece_id)
        }
        if (firstClickPiece === "whitePawn") {
            whitePawnMove(piece_id)
        }
        
        if (firstClickPiece === "blackRook") {
            rookMove(piece_id)
        }
        if (firstClickPiece === "whiteRook") {
            rookMove(piece_id)
        }
        
        if (firstClickPiece === "blackKnight") {
            knightMove(piece_id)
        }
        if (firstClickPiece === "whiteKnight") {
            knightMove(piece_id)
        }
        
        if (firstClickPiece === "blackBishop") {
            bishopMove(piece_id)
        }
        if (firstClickPiece === "whiteBishop") {
            bishopMove(piece_id)
        }
        
        if (firstClickPiece === "blackKing") {
            kingMove(piece_id)
        }
        if (firstClickPiece === "whiteKing") {
            kingMove(piece_id)
        }
        
        if (firstClickPiece === "blackQueen") {
            queenMove(piece_id)
        }
        if (firstClickPiece === "whiteQueen") {
            queenMove(piece_id)
        }
    }
}