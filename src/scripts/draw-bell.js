import { ctx } from './context';

const drawBell = (progress, isColor) => { // 的幽浮
    ctx.beginPath();
    ctx.arc(50, 98, 6, 0, progress * (Math.PI * 2 / 50), false);
    if (isColor) {
        ctx.moveTo(44, 98);
        ctx.lineTo(56, 98);
        ctx.fillStyle = '#fff657';
        ctx.fill();
    } else if (progress >= 50) {
        ctx.moveTo(44, 98);
        ctx.lineTo(56, 98);
    }
    ctx.stroke();
}

export { drawBell };
