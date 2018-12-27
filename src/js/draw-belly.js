import { ctx } from './context';
const drawBelly = (direction, x, y, n) => { // 池塘上(肚子)
    ctx.beginPath();
    if (direction === 'left') {
        ctx.arc(x, y, 20, Math.PI * .68, Math.PI * .68 + n * (Math.PI * .56 / 50), false);
    } else if (direction === 'right') {
        ctx.arc(x, y, 20, -Math.PI * .24, -Math.PI * .24 + n * (Math.PI * .56 / 50), false);
    }
    ctx.stroke();
}
export { drawBelly };
