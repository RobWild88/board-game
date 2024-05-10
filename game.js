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
  //return "snapback"
}



let board2 = Chessboard('board2', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true,
  onDrop: logic
})

$('#startBtn').on('click', board2.start)
$('#clearBtn').on('click', board2.clear)
board2.start()