class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html(" 🍇🍉🍌 FRUIT CATCHER 🍍🍎🍏🍒");
        this.title.position(500, 50);
        this.title.style('font-size', '60px');
        this.title.style('color', '#ffcc00');

        this.input.position(850,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', '#00ff99');

        this.button.position(850,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', '#6600cc');

        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', '#ff6600');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello 👋 " + player.name)
            this.greeting.position(750,250);
            this.greeting.style('color', 'red');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            database.ref('/').update({
                playerCount:0,
                gameState:0
            })
        });

    }
}