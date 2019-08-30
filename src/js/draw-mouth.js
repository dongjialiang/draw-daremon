import { ctx } from './context';

const drawMouth = (component, progress) => { // 圆圆的月亮升起来了(嘴巴)
    ctx.beginPath();
    if (component === 'head') {
        ctx.moveTo(72, 60);
        ctx.lineTo(72 - (progress * 44 / 50), 60);
    } else if (component === 'body') {
        ctx.arc(50, 60, 22, Math.PI, Math.PI - progress * (Math.PI / 50), true);
    }
    ctx.stroke();
}

export { drawMouth };
