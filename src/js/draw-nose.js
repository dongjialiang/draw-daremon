import { ctx } from './context';

const drawNose = (progress, isColor) => { // 豆子发芽了
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(50, 46, 4, 0, progress * (Math.PI * 2 / 50), false); // 鼻子
    if (progress >= 50) {
        ctx.moveTo(50, 49);
        ctx.lineTo(50, 60);
    } else if (isColor) {
        ctx.arc(50, 46, 4, 0, progress * (Math.PI * 2 / 50), false); // 鼻子上色
        ctx.fillStyle = '#ca2216';
        ctx.fill();
    }
    ctx.stroke();
}

export { drawNose };
