import { ctx } from './context';

const drawNose = (progress, isColor, progress_max) => { // 豆子发芽了
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(50, 46, 4, 0, progress * (Math.PI * 2 / progress_max), false); // 鼻子
    if (isColor) {
        ctx.arc(50, 46, 4, 0, progress * (Math.PI * 2 / progress_max), false); // 鼻子上色
        ctx.fillStyle = '#f9221d';
        ctx.fill();
    }
    if (progress >= progress_max) {
        ctx.moveTo(50, 49);
        ctx.lineTo(50, 60);
    }
    ctx.stroke();
}

export { drawNose };
