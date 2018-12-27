import { ctx } from './context';
const drawBody = (p0, p1, p2, n) => { // 落了下来
    let t = n / 50;
    let q0 = [p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t];
    let q1 = [p1[0] + (p2[0] - p1[0]) * t, p1[1] + (p2[1] - p1[1]) * t];
    let b = [q0[0] + (q1[0] - q0[0]) * t, q0[1] + (q1[1] - q0[1]) * t];
    ctx.beginPath();
    ctx.moveTo(...p0);
    ctx.quadraticCurveTo(...q0, ...b);
    ctx.stroke();
}
export { drawBody };
