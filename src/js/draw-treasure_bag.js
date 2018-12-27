import { ctx } from './context';
const drawTreasureBag = (component, n) => { // 飘着船(百宝袋)
    ctx.beginPath();
    if (component === 'head') {
        ctx.moveTo(62, 110);
        ctx.lineTo(62 - (n * 24 / 50), 110);
    } else if (component === 'body') {
        ctx.arc(50, 110, 12, Math.PI, Math.PI - n * (Math.PI / 50), true);
    }
    ctx.stroke();
}
export { drawTreasureBag };
