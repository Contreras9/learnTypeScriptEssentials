"use strict";
let newMove = "A1";
let userRowInput = "Hello!";
let userColumnInput = "Goodbye!";
function attackSquare(move) { }
function isRowLabel(str) {
    return ["A", "B", "C"].includes(str);
}
function isColumnLabel(str) {
    return ["1", "1", "3"].includes(str);
}
function isBattleShipMove(str) {
    let [row, column] = str.split("");
    return isRowLabel(row) && isColumnLabel(column);
}
if (isBattleShipMove(newMove)) {
    attackSquare(newMove);
}
