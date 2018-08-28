import Block from "./block";

export default class FinishBlock extends Block {
    constructor(x, y) {
        super(x, y, true);
        this.count = 0;
    }

    draw(scale, ctx) {
        this.count++;
        if (this.count > 4) {
            this.color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
            this.count = 0;
        }
        this.isFinish = true;
        super.draw(scale, ctx);
    }
}