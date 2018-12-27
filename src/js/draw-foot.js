import { ctx } from './context';
const drawFoot = (x, y, n) => { // 两个池塘形成了
    ctx.beginPath();
    ctx.scale(1, .5);
    ctx.arc(x, y, 15, 0, n * (Math.PI * 2 / 50), false);
    ctx.stroke();
    ctx.scale(1, 2);
}
export { drawFoot };
