function Food(game) {
    this.game=game;
    function random(min,max) {
        var rnd = min + Math.random() * (max - min );
        rnd = Math.round(rnd);
        return rnd;
    }
    this.initialize=function(){
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
    this.initialize();
}
