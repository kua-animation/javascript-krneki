const canvas = document.querySelector("canvas");
const scr = canvas.getContext("2d");

const width = canvas.width; 
const height = canvas.height;


const player = new Player(40,70,50, "svg/player.svg");

const block1 = new Block(100, 200, 100, "svg/block.svg");
const block2 = new Block(280, 200, 70, "svg/block.svg");
const block3 = new Block(600, 100, 40, "svg/block.svg");
const block4 = new Block(700, 400, 60, "svg/block.svg");

let block = [block1, block2, block3, block4];

function gameloop(){
    scr.fillStyle = "#d3c2e6";
    scr.fillRect(0, 0, width, height);
    window.requestAnimationFrame(gameloop);

    player.update();
    for(let i = 0; i < block.length; i++){
        block[i].draw();
    }

}


gameloop();

player.movePlayer("w","s","a","d",5, block, block.length);

