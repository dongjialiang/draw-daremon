import { ctx } from './context';

const drawMoustache = progress => { // 再加上胡子
    ctx.beginPath();
    if (progress > 0) {
        ctx.lineWidth = 1;
        
        ctx.moveTo(34, 48);
        ctx.lineTo(34 - ((34 - 12) / 50 * progress), 48 - (48 - 38) / 50 * progress);
        ctx.moveTo(34, 52);
        ctx.lineTo(34 - (34 - 10) / 50 * progress, 52);
        ctx.moveTo(34, 56);
        ctx.lineTo(34 - (34 - 12) / 50 * progress, 58 + (65 - 56) / 50 * progress);

        ctx.moveTo(66, 48);
        ctx.lineTo(66 + (88 - 66) / 50 * progress, 48 - (48 - 38) / 50 * progress);
        ctx.moveTo(66, 52);
        ctx.lineTo(66 + (90 - 66) / 50 * progress, 52);
        ctx.moveTo(66, 56);
        ctx.lineTo(66 + (88 - 66) / 50 * progress, 58 + (65 - 56) / 50 * progress);
    }
    ctx.stroke();
}
export { drawMoustache };
