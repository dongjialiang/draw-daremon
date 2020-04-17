import { ctx } from './context';

const drawEye = (x, progress) => { // 圆圈中一点(眼睛)
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(x, 35, 9, 0, progress * (Math.PI * 2 / 50), false); // 圆圈
    ctx.stroke();
    if (progress >= 50) {
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.lineWidth = 3;
        x = x === 42 ? 45 : 57;
        ctx.arc(x, 35, 4, 0, Math.PI * 2, true); // 点
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
}

export {
    drawEye,
};
