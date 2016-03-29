function Snake(game) {
    this.game = game;
    this.x = game.sceneWidth ;
    this.y = game.sceneHeight / 2;
    this.deltaX = -1;
    this.deltaY = 0;
    this.lengthSnake = 2;
    var segments = [];
    this.initialize = function () {
        //lengthSnake=this.lengthSnake;
        for (var i = 0; i < this.lengthSnake; i++) {
            this.addSegment();
        }
    };
    this.addSegment=function (){
        segments.push(new Segment(this.game, this.x + 1, this.y));
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
        this.handSnake=segments[0];
        this.handSnake.x = this.handSnake.x + this.deltaX;
        this.handSnake.y = this.handSnake.y + this.deltaY;

        if (this.handSnake.x > game.sceneWidth || this.handSnake.y > game.sceneHeight || this.handSnake.x < 0 ||this. handSnake.y < 0) {
            gameOver();

        }
        if (this.handSnake.x == game.food.x && this.handSnake.y == game.food.y) {
            this.addSegment();
            this.game.food.initialize();
        }
        for (var j = 1; j<segments.length; j++) {
            if(this.handSnake.x==segments[j].x&&this.handSnake.y==segments[j].y){
                gameOver();
            }
        }
    };
    this.initialize();
}
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
