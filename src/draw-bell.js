import { ctx } from './context';

const drawBell = (progress, isColor, progress_max) => { // 的幽浮
    ctx.beginPath();
    ctx.arc(50, 98, 6, 0, progress * (Math.PI * 2 / progress_max), false);
    if (isColor) {
        ctx.fillStyle = '#fff657';
        ctx.fill();
    }
    if (progress >= progress_max) {
        ctx.moveTo(44, 98);
        ctx.lineTo(56, 98);
    }
    ctx.stroke();
}

export { drawBell };
