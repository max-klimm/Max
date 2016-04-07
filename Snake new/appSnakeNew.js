var game=new Game();
function main(){
    game.clear();
    game.snake.move();
    game.snake.draw();
    game.food.draw();
}
function whatKey (evt){

        switch (evt.keyCode) {
            case 37:
                game.snake.moveLeft();
                break;
            case 39:
                game.snake.moveRight();
                break;
            case 38:
                game.snake.moveUp();
                break;
            case 40:
                game.snake.moveDown();
                break;
        }
}

var gameLoop = setInterval(main, 200);
window.addEventListener('keydown', whatKey, true);
function textOutput(){
    game.context.font = "bold 38px Verdana,sans-serif";
    game.context.lineWidth = 1;
    game.context.strokeStyle = "black";
    game.context.strokeText("     Игра окончена", 20, 150);
}
function gameOver(){
    game.clear();
    //line();
    textOutput();
    //this.context.clearRect(1,1,this.canvasWidth-2,this.canvasHeight-2);
    clearInterval(gameLoop);

}
