//hi c:

var clear_board = function() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.beginPath();
  console.log("Cleared board.");
};

var place_shape = function(e) {
  console.log(e.offsetX + ' ' + e.offsetY);
  var rad = 20; //changeable
  //testing
  ctx.lineTo(e.clientX - rad/2, e.clientY - rad/2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(e.clientX - rad/2, e.clientY - rad/2, rad, 0, 2*Math.PI); //wheres my Math.TAU????
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rad/2, e.clientY - rad/2);
};


// get context
var canvas =  document.getElementById("slate");
var ctx = canvas.getContext('2d');

console.log(ctx);

ctx.fillStyle="lightsteelblue";
ctx.beginPath();

// bind buttons
document.getElementById("clear").addEventListener("click", clear_board);
canvas.addEventListener("click", place_shape);
