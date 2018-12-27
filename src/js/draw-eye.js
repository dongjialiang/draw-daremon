import { ctx } from './context';
const drawEye = (x, n) => { // 圆圈中一点(眼睛)
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#fff';
    ctx.arc(x, 35, 9, 0, n * (Math.PI * 2 / 50), false); // 圆圈
    ctx.stroke();

    if (n >= 50) {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.fillStyle = '#000';
        x = x === 42 ? 45 : 57;
        ctx.arc(x, 35, 4, 0, Math.PI * 2, true); // 点
        ctx.stroke();
        ctx.fill();
    }
}
export {
    drawEye,
};
