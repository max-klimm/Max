//var game=new Game();
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

