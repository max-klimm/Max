var game=new Game();
function main(){
    game.clear();
    game.snake.move();
    game.snake.draw();
    game.food.draw();
}
function whatKey (evt){
    game.whatKey(evt)
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
