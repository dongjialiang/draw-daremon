import { ctx } from './context';

const drawCollar = (direction, progress, isColor, progress_max) => { // 这边一下, 那边一下
    ctx.beginPath();
    let angle = direction === 'left' ? .56 : .44;
    let dir = direction === 'left' ? 1 : -1;
    let anticlockwise = direction === 'left' ? false : true;
    ctx.arc(50, 72, 27, Math.PI * angle, Math.PI * angle + dir * progress * (Math.PI * .32 / progress_max), anticlockwise);
    if (isColor) {
        ctx.beginPath();
        ctx.arc(50, 72, 27, Math.PI * .86, Math.PI * 0.14, true);
        ctx.fillStyle = '#ce2411';
        ctx.fill();
    }
    ctx.stroke();
}

export { drawCollar };
