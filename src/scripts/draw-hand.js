import { ctx } from './context';

const drawHand = (direction, p0, p1, p2, progress, isColor) => { // 6月6日
    let t = progress / 50;
    let q0 = [p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t];
    let q1 = [p1[0] + (p2[0] - p1[0]) * t, p1[1] + (p2[1] - p1[1]) * t];
    let b = [q0[0] + (q1[0] - q0[0]) * t, q0[1] + (q1[1] - q0[1]) * t];
    ctx.beginPath();
    ctx.moveTo(...p0);
    ctx.quadraticCurveTo(q0[0], q0[1], b[0], b[1]);
    ctx.stroke();
    if (progress >= 50) {
        ctx.beginPath();
        if (direction === 'left') {
            b[0] += 5;
        } else if (isColor && direction === 'right') {
            b[0] -= 5;
            ctx.arc(50, 112, 41, -Math.PI * 0.02, Math.PI * 1.02, true);
            ctx.fillStyle = '#3694d9';
            ctx.fill();
            ctx.stroke();
        } else if (direction === 'right') {
            b[0] -= 5;
        }
        ctx.beginPath();
        ctx.arc(b[0], b[1] - 3, 5, 0, Math.PI * 2, false);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.stroke();
    }
}

export { drawHand };
