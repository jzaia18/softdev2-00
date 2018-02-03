//hi c:


var clear_board = function() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.beginPath();
  console.log("Cleared board.");
};

var toggle_shape = function() {
  state++;
  state%=2;
};

var place_shape = function(e) {
  console.log(e.clientX + ' ' + e.clientY);
  if (state%2)
    ctx.fillRect(e.clientX, e.clientY, 40, 40);
  else
    ctx.arc(e.clientX, e.clientY, 20, 0, 2*Math.PI); //wheres my Math.TAU????
  ctx.fill();
  ctx.beginPath();
};


// vars
var HEIGHT = 750;
var WIDTH = 1000;
var state = 0;

// get context
var canvas =  document.getElementById("slate");
var ctx = canvas.getContext('2d');

console.log(ctx);

ctx.fillStyle="lightsteelblue";
ctx.beginPath();

// bind buttons
document.getElementById("clear").addEventListener("click", clear_board);
document.getElementById("toggle").addEventListener("click", toggle_shape);
canvas.addEventListener("click", place_shape);
