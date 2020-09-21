const drawMouth = (ctx, component, progress, progress_max) => { // 圆圆的月亮升起来了(嘴巴)
    ctx.beginPath();
    if (component === 'head') {
        ctx.moveTo(72, 60);
        ctx.lineTo(72 - (progress * 44 / progress_max), 60);
    } else if (component === 'body') {
        ctx.arc(50, 60, 22, Math.PI, Math.PI - progress * (Math.PI / progress_max), true);
    }
    ctx.stroke();
}

export { drawMouth };
