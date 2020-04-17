import { ctx } from './context';

const drawFoot = (x, y, progress, isColor) => { // 两个池塘形成了
    ctx.beginPath();
    ctx.scale(1, .5);
    ctx.arc(x, y, 15, 0, progress * (Math.PI * 2 / 50), false);
    ctx.stroke();
    if (isColor) {
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.stroke();
    }
    ctx.scale(1, 2);
}

export { drawFoot };
