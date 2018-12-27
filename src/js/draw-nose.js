import { ctx } from './context';
const drawNose = n => { // 豆子发芽了
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(50, 46, 4, 0, n * (Math.PI * 2 / 50), false); // 鼻子
    if (n >= 50) {
        ctx.moveTo(50, 49);
        ctx.lineTo(50, 60);
    }
    ctx.stroke();
}
export { drawNose };
