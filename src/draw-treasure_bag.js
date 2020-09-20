import { ctx } from './context';

const drawTreasureBag = (component, progress, progress_max) => { // 飘着船(百宝袋)
    ctx.beginPath();
    if (component === 'head') {
        ctx.moveTo(62, 110);
        ctx.lineTo(62 - (progress * 24 / progress_max), 110);
    } else if (component === 'body') {
        ctx.arc(50, 110, 12, Math.PI, Math.PI - progress * (Math.PI / progress_max), true);
    }
    ctx.stroke();
}

export { drawTreasureBag };
