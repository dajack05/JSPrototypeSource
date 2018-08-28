import Player from "./player"
import Block from "./block";
import FinishBlock from "./finishblock";

const SCALE = 50;

let canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

document.body.appendChild(document.createElement("br"));
let easyBtn = document.createElement("button");
easyBtn.innerHTML = "Easy";
easyBtn.style.fontSize = "30pt";
easyBtn.onclick = ()=>{startup(10)};
document.body.appendChild(easyBtn);

let medBtn = document.createElement("button");
medBtn.innerHTML = "Medium";
medBtn.style.fontSize = "30pt";
medBtn.onclick = ()=>{startup(20)};
document.body.appendChild(medBtn);

let hardBtn = document.createElement("button");
hardBtn.innerHTML = "Hard";
hardBtn.style.fontSize = "30pt";
hardBtn.onclick = ()=>{startup(30)};
document.body.appendChild(hardBtn);

const blockSize = {
    x: canvas.width / SCALE,
    y: canvas.height / SCALE
};

let ctx = canvas.getContext("2d");

let blocks = [];

let player = new Player(blockSize);

startup(15);

document.onkeydown = (evt) => {
    if (evt.code == "KeyD")
        player.move(1, 0, blocks);

    if (evt.code == "KeyA")
        player.move(-1, 0, blocks);

    if (evt.code == "KeyS")
        player.move(0, 1, blocks);

    if (evt.code == "KeyW")
        player.move(0, -1, blocks);
};

window.setInterval(loop, 1000 / 20);

function loop() {
    ctx.fillStyle = "#303030";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Draw a grid
    for (let i = 0; i < blockSize.x; i++) {
        ctx.beginPath();
        ctx.moveTo(i * SCALE, 0);
        ctx.lineTo(i * SCALE, 1000);
        ctx.stroke();
    }

    for (let i = 0; i < blockSize.y; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * SCALE);
        ctx.lineTo(1000, i * SCALE);
        ctx.stroke();
    }

    player.draw(SCALE, ctx);

    blocks.forEach(block => {
        block.draw(SCALE, ctx);
    });
}

function startup(size) {
    blocks = [];

    for (let i = 0; i < size; i++) {
        blocks.push(
            new Block(
                Math.round(Math.random() * blockSize.x),
                Math.round(Math.random() * blockSize.y),
                Math.random() > 0.5
            )
        );
    }

    blocks.push(new FinishBlock(
        Math.round(Math.random() * blockSize.x),
        Math.round(Math.random() * blockSize.y)
    ));
}