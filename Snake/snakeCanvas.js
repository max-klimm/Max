var game=new Game();
var head;
function Segment(game,x,y){
    this.game=game;
    this.x=x;
    this.y=y;
    this.drawColored=function(color){
        this.game.context.fillStyle = color;
        this.game.context.beginPath();
        this.game.context.rect(this.x*this.game.cellSize, this.y*this.game.cellSize, this.game.cellSize, this.game.cellSize);
        this.game.context.closePath();
        this.game.context.fill();
    };
    this.clear=function(){
        this.drawColored("white");
    };
    this.draw=function(){
        this.drawColored("red");
    }
}
function Snake(game) {
    this.game = game;
    this.x = game.sceneWidth ;
    this.y = game.sceneHeight / 2;
    this.deltaX = -1;
    this.deltaY = 0;
    this.lengthSnake = 2;
    var segments = [];
    this.initialize = function (lengthSnake) {
        lengthSnake=this.lengthSnake;
        for (var i = 0; i < lengthSnake; i++) {
            var segment = new Segment(this.game, this.x + i, this.y);
            segments.push(segment);
        }
    };
    this.draw = function () {
        segments.forEach(function (segment) {
            segment.draw();
        });
    };
    this.moveLeft = function () {
        this.deltaX = -1;
        this.deltaY = 0;
    };
    this.moveRight = function () {
        this.deltaX = 1;
        this.deltaY = 0;
    };
    this.moveUp = function () {
        this.deltaX = 0;
        this.deltaY = -1;
    };
    this.moveDown = function () {
        this.deltaX = 0;
        this.deltaY = 1;
    };

    this.move = function () {
        for (var i = segments.length - 1; i > 0; i--) {
            segments[i].x = segments[i - 1].x;
            segments[i].y = segments[i - 1].y;
        }
        segments[0].x = segments[0].x + this.deltaX;
        segments[0].y = segments[0].y + this.deltaY;

        if (segments[0].x > game.sceneWidth || segments[0].y > game.sceneHeight || segments[0].x < 0 || segments[0].y < 0) {
            gameOver();

        }
        if (segments[0].x == game.food.x && segments[0].y == game.food.y) {
            this.lengthSnake=1;
            this.initialize(this.lengthSnake);
            this.game.food.initializeFood();
        }
        for (var j = 1; j<segments.length; j++) {
           if(segments[0].x==segments[j].x&&segments[0].y==segments[j].y){
               gameOver();
           }
        }
    };
    this.initialize();
}
function textOutput(){
    game.context.font = "bold 38px Verdana,sans-serif";
    game.context.lineWidth = 1;
    game.context.strokeStyle = "black";
    game.context.strokeText("     Игра окончена", 20, 150)
}
function gameOver(){
   textOutput();
    clearInterval(gameLoop);
}
function Food(game) {
    this.game=game;
    function random(min,max) {
        var rnd = min + Math.random() * (max - min );
        rnd = Math.round(rnd);
        return rnd;
    }
    this.initializeFood=function(){
        this.x=random(0,game.sceneWidth);
        this.y=random(0,game.sceneHeight);
        this.draw()
    };
    this.draw = function () {
        this.game.context.fillStyle = "black";
        this.game.context.beginPath();
        this.game.context.rect(this.x*this.game.cellSize, this.y*this.game.cellSize, this.game.cellSize, this.game.cellSize);//баг -выход за поле
        this.game.context.closePath();
        this.game.context.fill();

    };
    this.initializeFood();
}
function Game(){
    this.cellSize = 16;
    this.canvasWidth = 480;
    this.canvasHeight = 480;
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.context = this.canvas.getContext('2d');
    this.context.strokeRect(0,0,this.canvasWidth,this.canvasHeight);
    this.sceneWidth = Math.ceil(this.canvasWidth / this.cellSize);//20
    this.sceneHeight = Math.ceil(this.canvasHeight / this.cellSize);//20
    this.snake = new Snake(this);
    this.food = new Food(this);
    this.whatKey=function(evt) {
        switch (evt.keyCode) {
            case 37:
                this.snake.moveLeft();
                break;
            case 39:
                this.snake.moveRight();
                break;
            case 38:
                this.snake.moveUp();
                break;
            case 40:
                this.snake.moveDown();
                break;
        }
    };
    this.clear=function(){
        this.context.clearRect(1,1,this.canvasWidth-2,this.canvasHeight-2);
    }
}
function main(){
    game.clear();
    game.snake.move();
    game.snake.draw();
    game.food.draw();
}
function whatKey (evt){
    game.whatKey(evt)
}
var gameLoop = setInterval(main, 500);
window.addEventListener('keydown', whatKey, true);



