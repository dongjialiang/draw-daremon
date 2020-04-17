import { ctx } from './context';

const drawNose = (progress, isColor) => { // 豆子发芽了
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(50, 46, 4, 0, progress * (Math.PI * 2 / 50), false); // 鼻子
    if (isColor) {
        ctx.arc(50, 46, 4, 0, progress * (Math.PI * 2 / 50), false); // 鼻子上色
        ctx.fillStyle = '#f9221d';
        ctx.moveTo(50, 49);
        ctx.lineTo(50, 60);
        ctx.fill();
    } else if (progress >= 50) {
        ctx.moveTo(50, 49);
        ctx.lineTo(50, 60);
    }
    ctx.stroke();
}

export { drawNose };
