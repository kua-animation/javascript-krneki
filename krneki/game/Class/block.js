class Block {
    constructor (positionX, positionY, size, phat) {
        this.position = {
            x: positionX,
            y: positionY,
        }
        this.size = size; 
        
	this.side = {
            left: positionX,
            bottom: positionY - this.size,
            top: positionY,
            right: positionX - this.size
        }
        
	this.image = new Image();
        this.image.src = phat;
    }
    draw(){
        this.updateSide()
        scr.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }
    updateSide(){
        this.side.left = this.position.x;
        this.side.right = this.position.x + this.size;
        this.side.top = this.position.y;
        this.side.bottom = this.position.y + this.size;
    }
}
