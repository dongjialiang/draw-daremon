import { ctx } from './context';
const drawHead = n => { // 圆圆的花盆(头的轮廓)
    ctx.beginPath();
    ctx.arc(50, 50, 40, -Math.PI * .5, -Math.PI * .5 + n * (Math.PI * 2 / 50), false);
    ctx.stroke();
}
export { drawHead };
