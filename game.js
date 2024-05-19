function logic(
  source, target, piece, newPosition, oldPosition, orientation
){
  console.log("source", source)
  console.log("target", target)
  console.log("piece", piece)
  console.log("newPosition", newPosition)
  console.log("oldPosition", oldPosition)
  console.log("orientation", orientation)
  console.log("------------")


  
  //const move = game.move({
  //  from: source,
  //  to: target,
  //  promotion: 'q' //automatically promtes to queen for simplicity
  //});
  //if (move === null) return 'snapback';
  //updateStatus();
  
  //return "snapback" to cause piece to go back if move is not valid
}


let board2 = Chessboard('board2', {
  draggable: true,
  dropOffBoard: 'snapback',
  sparePieces: true,
  onDrop: logic
})

$('#startBtn').on('click', board2.start)
$('#clearBtn').on('click', board2.clear)
$('#changeBtn').on('click', board2.flip)
board2.start()