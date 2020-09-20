import { ctx } from './context';

const drawFoot = (x, y, progress, isColor, progress_max) => { // 两个池塘形成了
    ctx.beginPath();
    ctx.scale(1, .5);
    ctx.arc(x, y, 15, 0, progress * (Math.PI * 2 / progress_max), false);
    ctx.stroke();
    if (isColor) {
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.stroke();
    }
    ctx.scale(1, 2);
}

export { drawFoot };
