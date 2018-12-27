import { ctx } from './context';
const drawHand = (p0, p1, p2, n) => { // 6月6日
    let t = n / 50;
    let q0 = [p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t];
    let q1 = [p1[0] + (p2[0] - p1[0]) * t, p1[1] + (p2[1] - p1[1]) * t];
    let b = [q0[0] + (q1[0] - q0[0]) * t, q0[1] + (q1[1] - q0[1]) * t];
    ctx.beginPath();
    ctx.moveTo(...p0);
    ctx.quadraticCurveTo(q0[0], q0[1], b[0], b[1]);
    ctx.stroke();
    b[0] = b[0] > 50 ? b[0] - 5 : b[0] + 5;
    ctx.beginPath();
    if(n === 50) {
        ctx.arc(b[0], b[1] - 3, 5, 0, Math.PI * 2, false);
    }
    ctx.stroke();
}
export { drawHand };
