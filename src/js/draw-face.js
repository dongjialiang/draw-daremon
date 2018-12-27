import { ctx } from './context';
const drawFace = n => { // 圆圆的花盆(蓝白分界线)
    ctx.beginPath();
    ctx.arc(50, 60, 30, -Math.PI * .7, -Math.PI * .7 - n * (Math.PI * 1.59 / 50), true);
    ctx.stroke();
}
export {
    drawFace,
};
