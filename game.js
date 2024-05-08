let cells = {}

function init () {
  for (const cell of document.querySelectorAll('.cell')) {
    cells[cell.id] = cell
  }
}

document.addEventListener('DOMContentLoaded', init)