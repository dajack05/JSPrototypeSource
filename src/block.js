export default class Block{
    constructor(x,y,isStatic = true){
        this.position = {
            x:x,
            y:y
        };

        this.color = isStatic?"#ff9922":"#2299ff";

        this.static = isStatic;
        console.log(this.static);
    }

    move(x,y){
        let targetPos = {
            x: this.position.x + x,
            y: this.position.y + y
        };

        this.position = targetPos;
    }

    draw(scale,ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x*scale,this.position.y*scale,scale,scale);
    }
}