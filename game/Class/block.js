class Block {
    constructor (positionX, positionY, width, height, color) {
        this.position = {
            x: positionX,
            y: positionY,
        }
        this.size = {
            w: width,
            h: height,
        }
        this.side = {
            left: positionX,
            bottom: positionY - this.size.h,
            top: positionY,
            right: positionX - this.size.w
        }
        this.color = color
    }
    draw(){
        this.updateSide()
        scr.fillStyle ="#".concat(this.color);
        scr.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
    }
    updateSide(){
        this.side.left = this.position.x;
        this.side.right = this.position.x + this.size.w;
        this.side.top = this.position.y;
        this.side.bottom = this.position.y + this.size.h;
    }
}