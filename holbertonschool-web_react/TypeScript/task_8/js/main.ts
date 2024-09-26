type RowID = number;

interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

declare module "./crud" {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
updateRow(newRowID, updatedRow);
deleteRow(newRowID);
