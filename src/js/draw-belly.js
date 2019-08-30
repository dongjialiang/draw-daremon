import { ctx } from './context';

const drawBelly = (direction, x, y, progress, isColor) => { // 池塘上(肚子)
    ctx.beginPath();
    if (direction === 'left') {
        ctx.arc(x, y, 20, Math.PI * .68, Math.PI * .68 + progress * (Math.PI * .56 / 50), false);
    } else if (isColor) {
        ctx.arc(x, y, 20, -Math.PI * .24, -Math.PI * .24 + Math.PI * 2, false);
        ctx.fillStyle = '#fff';
        ctx.fill();
    } else if (direction === 'right') {
        ctx.arc(x, y, 20, -Math.PI * .24, -Math.PI * .24 + progress * (Math.PI * .56 / 50), false);
    }
    ctx.stroke();
}

export { drawBelly };
