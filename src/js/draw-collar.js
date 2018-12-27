import { ctx } from './context';
const drawCollar = (direction, n) => { // 这边一下, 那边一下
    ctx.beginPath();
    if (direction === 'left') {
        ctx.arc(50, 72, 27, Math.PI * .56, Math.PI * .56 + n * (Math.PI * .32 / 50), false);
    } else if (direction === 'right') {
        ctx.arc(50, 72, 27, Math.PI * .44, Math.PI * .44 - n * (Math.PI * .32 / 50), true);
    }
    ctx.stroke();
}
export { drawCollar };
