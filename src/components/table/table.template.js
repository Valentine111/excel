const CODES = {
    A: 65,
    Z: 90
}


function toCell(_, index) {
  return `
    <div class="cell" contenteditable data-col="${index}">
    </div>
  `
}

function toColumn(col, index) {
    return `
    <div class="column" data-type="resizable" data-col="${index}">${col}
     <div class="col-resize" data-resize="col"></div>
    </div>
function createCell(cell) {
  return `
    <div class="cell" contenteditable>${cell}</div>
  `
}

function toColumn(col) {
    return `
    <div class="column">${col}</div>
  `
}

function createRow(content, num='') {
    const resizer= num !==''?` 
    <div class="row-resize" data-resize="row"></div>`:'';
    return `
    <div class="row" data-type="resizable">
      <div class="row-info">${num}
      ${resizer}
      </div>
    return `
    <div class="row">
      <div class="row-info">${num}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(cols));

    for (let i = 0; i < rowsCount; i++) {
        const line = new Array(colsCount)
            .fill('')
            .map(toChar)
            .map(toCell)
            .map(createCell)
            .join('')
        rows.push(createRow(line, i+1))
    }

    return rows.join('');
}
