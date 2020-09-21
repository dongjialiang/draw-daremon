const drawBelly = (ctx, direction, x, y, progress, isColor, progress_max) => { // 池塘上(肚子)
    ctx.beginPath();
    let dir = direction === 'left' ? 1 : -1;
    let angle = (direction === 'left' ? .68 : .24) * dir;
    ctx.arc(x, y, 20, Math.PI * angle, Math.PI * angle + progress * (Math.PI * .56 / progress_max), false);
    if (isColor) {
        ctx.arc(x, y, 20, -Math.PI * .24, -Math.PI * .24 + Math.PI * 2, false);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
    ctx.stroke();
}

export { drawBelly };
