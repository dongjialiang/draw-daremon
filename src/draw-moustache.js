import { ctx } from './context';

const drawHalfMoustache = (initX, progress, dir, progress_max) => {
    ctx.moveTo(initX, 48);
    ctx.lineTo(initX + dir * 22 / progress_max * progress, 48 - 10 / progress_max * progress);
    ctx.moveTo(initX, 52);
    ctx.lineTo(initX + dir * 26 / progress_max * progress, 52);
    ctx.moveTo(initX, 56);
    ctx.lineTo(initX + dir * 22 / progress_max * progress, 58 + 9 / progress_max * progress);
}

const drawMoustache = (progress, progress_max) => { // 再加上胡子
    ctx.beginPath();
    if (progress > 0) {
        ctx.lineWidth = 1;

        drawHalfMoustache(34, progress, -1, progress_max);

        drawHalfMoustache(66, progress, 1, progress_max);
    }
    ctx.stroke();
}
export { drawMoustache };
