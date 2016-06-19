
var gameLoop;// старт
var boardX = document.documentElement.clientWidth-50;// ширина пол€
var boardY =document.documentElement.clientHeight-50;//высота пол€
var canvas = document.getElementById("example");
ctx = canvas.getContext("2d");
canvas.width=boardX;
canvas.height=boardY;
var interval=2;
var speed=20;

function clear(){
    ctx.clearRect(0, 0, board.h, board.w);}

var board ={
    h:boardY,
    w:boardX,
    drawPole:
        function(){

            ctx.fillStyle = "yellow";
            ctx.beginPath();
            ctx.rect(2, 2, this.w-5, this.h-5);
            ctx.strokeRect(0,0,this.w-1, this.h-1);
            ctx.closePath();
            ctx.fill();
        }
};//обьект поле


var paddleRed={
    x:5,
    y:200,
    h:150,
    w:10,
    speed:speed,
    draw:
        function(){

            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.rect(this.x,this.y , this.w, this.h);
            //ctx.strokeRect( , , , );
            ctx.closePath();
            ctx.fill();
        },
    moveUp:
        function(board){
            this.y =this.y - this.speed;
            if (this.y < 0)
                this.y=0;
        },
    moveDown: function(board){
                this.y = this.y + this.speed;
                if (this.y >board.h - this.h)
                    this.y = board.h - this.h;

            }

};//ракетка красна€


var paddleGreen={
    x:boardX-15,
    y:200,
    h:150,
    w:10,
    speed:speed,
    draw:
        function(){

            ctx.fillStyle = "green";
            ctx.beginPath();
            ctx.rect(this.x,this.y , this.w, this.h);
            //ctx.strokeRect( , , , );
            ctx.closePath();
            ctx.fill();
        },
    moveUp:
        function(board){
            this.y =this.y - this.speed;
            if (this.y < 0)
                this.y=0;
        },
    moveDown: function(board){
        this.y = this.y + this.speed;
        if (this.y >board.h - this.h)
            this.y = board.h - this.h;
         }
    };//ракетка зелена€


var ball={
    x:200,
    y:200,
    dx:1,
    dy:1,
    size:25,

    move:function (){
        this.x=this.x+this.dx;//x+=dx
        this.y=this.y+this.dy;//y+=dy
        if (this.y - this.size < 0) {
            this.dy = -this.dy;
        }
        if (this.y + this.size >boardY) {
            this.dy = -this.dy;
        }
        if (this.x+ this.size>paddleGreen.x ) {

            if (this.y > paddleGreen.y && this.y < paddleGreen.y+paddleGreen.h) {
                this.dx = -this.dx;
            }
        }
       if (this.x-this.size<paddleRed.x+paddleRed.w) {
           if (this.y > paddleRed.y && this.y < paddleRed.y + paddleRed.h) {
               this.dx = -this.dx;
           }
       }
       if(this.x>boardX){
           gameOver();


       }

       if(this.x<0){
           gameOver();

       }

    },


    draw:function(){
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }
}//обьект м€ч


function whatKey(evt) {
    switch (evt.keyCode) {
        case 81:
            paddleRed.moveUp(board);
            break;
        case 65:
            paddleRed.moveDown(board);
            break;
        case 38:
            paddleGreen.moveUp(board);
            break;
        case 40:
            paddleGreen.moveDown(board);
            break;
    }
}
function textOutput(){
    ctx.font = "bold 38px Verdana,sans-serif";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.strokeText("     »гра окончена", 20, 150);
}

function goGo(){
    board.drawPole();
    paddleRed.draw();
    paddleGreen.draw();
    ball.draw();
    ball.move();
}
function gameOver(){
   textOutput();
clearInterval(gameLoop);
}


gameLoop = setInterval(goGo, interval);
window.addEventListener('keydown', whatKey, true);
