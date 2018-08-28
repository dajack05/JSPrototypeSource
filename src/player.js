import Util from "./util";

export default class Player {
    constructor(bounds) {
        this.bounds = bounds;
        this.position = {
            x: 0,
            y: 0
        };
    }

    move(x, y, blocks) {
        let targetPos = {
            x: this.position.x + x,
            y: this.position.y + y
        };

        let shouldMove = true;
        blocks.forEach(block => {
            if (Util.dist(targetPos, block.position) < 1) {
                if (!block.static) {
                    block.move(x, y);
                    this.position = targetPos;
                } else {
                    if (block.isFinish) {
                        alert("You win!");
                        window.location = "./";
                    }
                    shouldMove = false;
                }
            }
        });

        if (shouldMove)
            this.position = targetPos;

        if (this.position.x > this.bounds.x - 1)
            this.position.x = 0;
        if (this.position.x < 0)
            this.position.x = this.bounds.x - 1;

        if (this.position.y > this.bounds.y - 1)
            this.position.y = 0;
        if (this.position.y < 0)
            this.position.y = this.bounds.y - 1;
    }

    draw(scale, ctx) {
        ctx.fillStyle = '#99ff22';
        ctx.fillRect(this.position.x * scale, this.position.y * scale, scale, scale);
    }
}