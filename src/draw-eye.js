const drawEye = (ctx, x, progress, progress_max) => { // 圆圈中一点(眼睛)
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(x, 35, 9, 0, progress * (Math.PI * 2 / progress_max), false); // 圆圈
    ctx.stroke();
    if (progress >= progress_max) {
        ctx.fillStyle = '#000';
        ctx.fill();
        ctx.lineWidth = 3;
        x = x === 42 ? 45 : 57;
        ctx.arc(x, 35, 4, 0, Math.PI * 2, true); // 点
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
}

export {
    drawEye,
};
