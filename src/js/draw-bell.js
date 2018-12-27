import { ctx } from './context';
const drawBell = n => { // 的幽浮
    ctx.beginPath();
    ctx.arc(50, 98, 6, 0, n * (Math.PI * 2 / 50), false);
    if (n >= 50) {
        ctx.moveTo(44, 98);
        ctx.lineTo(56, 98);
    }
    ctx.stroke();
}
export { drawBell };
