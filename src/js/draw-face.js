import { ctx } from './context';

const drawFace = (progress, isColor) => { // 圆圆的花盆(蓝白分界线)
    ctx.beginPath();
    ctx.arc(50, 60, 30, -Math.PI * .68, -Math.PI * .68 - progress * (Math.PI * 1.6 / 50), true);
    if (isColor) {
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
    ctx.stroke();
}

export {
    drawFace,
};
