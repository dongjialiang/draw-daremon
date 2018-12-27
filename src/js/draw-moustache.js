import { ctx } from './context';
const drawMoustache = n => { // 再加上胡子
    ctx.beginPath();
    ctx.moveTo(34, 48);
    ctx.lineTo(34 - ((34 - 12) / 50 * n), 48 - (48 - 38) / 50 * n);
    ctx.moveTo(34, 52);
    ctx.lineTo(34 - (34 - 10) / 50 * n, 52);
    ctx.moveTo(34, 58);
    ctx.lineTo(34 - (34 - 12) / 50 * n, 58 + (65 - 58) / 50 * n);

    ctx.moveTo(66, 48);
    ctx.lineTo(66 + (88 - 66) / 50 * n, 48 - (48 - 38) / 50 * n);
    ctx.moveTo(66, 52);
    ctx.lineTo(66 + (90 - 66) / 50 * n, 52);
    ctx.moveTo(66, 58);
    ctx.lineTo(66 + (88 - 66) / 50 * n, 58 + (65 - 58) / 50 * n);
    ctx.stroke();
}
export { drawMoustache };
