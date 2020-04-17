import { ctx } from './context';

const drawCollar = (direction, progress, isColor) => { // 这边一下, 那边一下
    ctx.beginPath();
    if (direction === 'left') {
        ctx.arc(50, 72, 27, Math.PI * .56, Math.PI * .56 + progress * (Math.PI * .32 / 50), false);
    } else if (isColor) {
        ctx.beginPath();
        ctx.arc(50, 72, 27, Math.PI * .86, Math.PI * 0.14, true);
        ctx.fillStyle = '#ce2411';
        ctx.fill();
    } else if (direction === 'right') {
        ctx.arc(50, 72, 27, Math.PI * .44, Math.PI * .44 - progress * (Math.PI * .32 / 50), true);
    }
    ctx.stroke();
}

export { drawCollar };
