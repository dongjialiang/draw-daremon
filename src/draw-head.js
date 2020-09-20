import { ctx } from './context';

const drawHead = (progress, isColor, progress_max) => { // 圆圆的花盆(头的轮廓)
    ctx.beginPath();
    ctx.arc(50, 50, 40, -Math.PI * .5, -Math.PI * .5 + progress * (Math.PI * 2 / progress_max), false);
    if (isColor) {
        ctx.fillStyle = '#3694d9';
        ctx.fill();
    }
    ctx.stroke();
}

export { drawHead };
