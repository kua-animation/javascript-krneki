const canvas = document.querySelector("canvas");
const scr = canvas.getContext("2d");

const width = canvas.width; 
const height = canvas.height;


const pl1 = new Player(10,20,50,50, "9cbf9dff");

const block1 = new Block(100, 200, 100, 100, "457096");
const block2 = new Block(280, 200, 70, 80, "457096");
const block3 = new Block(600, 100, 20, 80, "9cbf9dff");

let block = [block1, block2, block3];

function gameloop(){
    scr.fillStyle = "#241a2b";
    scr.fillRect(0, 0, width, height);
    window.requestAnimationFrame(gameloop);

    pl1.update();
    for(let i = 0; i < block.length; i++){
        block[i].draw();
    }

}


gameloop();

pl1.movePlayer("w","s","a","d",10, block, block.length);

