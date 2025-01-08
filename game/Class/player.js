class Player {
    constructor(positionX, positionY, width, height, color) {
        this.position = {
            x: positionX,
            y: positionY,
            newX: positionX,
            newY: positionY,
            originX: positionX,
            originY: positionY,
        }
        this.size = {
            w: width,
            h: height,
        }
        this.side = {
            left: positionX,
            bottom: positionY - height,
            top: positionY,
            right: positionX - width,
        }
        this.color = color
    }
    draw() {
        scr.fillStyle = "#".concat(this.color);
        scr.fillRect(this.position.x, this.position.y,this.size.w,this.size.h);
    }
    positionCollide(x, int ){
        for(let i = 0; i < int; i++){
            if (this.position.newX+this.size.w > x[i].side.left && this.position.newX < x[i].side.right){
                if(this.position.newY+this.size.h > x[i].side.top && this.position.newY < x[i].side.bottom){
                    return 1;
                }
            }
        }
        
    }
    updateSide(){
        this.side.left = this.position.x;
        this.side.right = this.position.x + this.size.w;
        this.side.top = this.position.y;
        this.side.bottom = this.position.y + this.size.h;
    }
    movePlayer(up, down, left, right, speed, x, ArryaSize){
        window.addEventListener("keypress", (event) => {
            switch (event.key) {
                case left:
                    this.position.newX -= speed; 
                    break;
                case right:
                    this.position.newX += speed;
                    break;
                case up:
                    this.position.newY -= speed;
                    break;
                case down:
                    this.position.newY += speed;
                    break;
            }
        if (this.positionCollide(x, ArryaSize) != 1) { 
            this.position.x = this.position.newX;
            this.position.y = this.position.newY;
            
        } else if (this.positionCollide(x, ArryaSize) == 1) {
            this.position.newX = this.position.x;
            this.position.newY = this.position.y;
        }

        });

    }
    update(){
        this.draw();
        this.updateSide();
    }
}