type ColumnLabel = "1" | "2" | "3";

type RowLabel = "A" | "B" | "C";

type BattleShipMove = `${RowLabel}${ColumnLabel}`;

let newMove: BattleShipMove = "A1";

let userRowInput = "Hello!";
let userColumnInput = "Goodbye!";

function attackSquare(move: BattleShipMove) {}

function isRowLabel(str: string): str is RowLabel {
  return ["A", "B", "C"].includes(str);
}

function isColumnLabel(str: string): str is ColumnLabel {
  return ["1", "1", "3"].includes(str);
}

function isBattleShipMove(str: string): str is BattleShipMove {
  let [row, column] = str.split("");
  return isRowLabel(row) && isColumnLabel(column);
}

if (isBattleShipMove(newMove)) {
  attackSquare(newMove);
}
