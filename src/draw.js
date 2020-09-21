import { ctx } from './context.js';
import { drawHead } from './draw-head.js';
import { drawFace } from './draw-face.js';
import { drawEye } from './draw-eye.js';
import { drawNose } from './draw-nose.js';
import { drawHand } from './draw-hand.js';
import { drawBell } from './draw-bell.js';
import { drawCollar } from './draw-collar.js';
import { drawBody } from './draw-body.js';
import { drawBelly } from './draw-belly.js';
import { drawFoot } from './draw-foot.js';
import { drawTreasureBag } from './draw-treasure_bag.js';
import { drawMouth } from './draw-mouth.js';
import { drawMoustache } from './draw-moustache.js';

const PROGRESS = Array.from({length: 21}).fill(0); // 所有步骤的进程
let step = 0; // 步骤
let isColor = false; // 是否上色的判断条件

const draw = (PROGRESS_MAX) => {
    ctx.clearRect(0, 0, 300, 300); // 清屏
    ctx.fillStyle = '#000';
    ctx.strokeStyle = '#000';

    ctx.save();

    step = step + (PROGRESS[step] >= PROGRESS_MAX) | 0;
    PROGRESS[step] = PROGRESS[step] + (PROGRESS[step] < PROGRESS_MAX) * 0.4;
    isColor = (step === 21);
    
    drawHand(ctx, 'right', [75, 80], [95, 100], [90, 110], PROGRESS[6], isColor, PROGRESS_MAX);
    drawHand(ctx, 'left', [25, 80], [5, 100], [10, 110], PROGRESS[5], isColor, PROGRESS_MAX);
    
    drawBody(ctx, [72, 88], [86, 110], [74, 130], PROGRESS[11], isColor, PROGRESS_MAX);
    drawBody(ctx, [28, 88], [14, 110], [26, 130], PROGRESS[10], isColor, PROGRESS_MAX);
    
    drawFoot(ctx, 65, 270, PROGRESS[13], isColor, PROGRESS_MAX);
    drawFoot(ctx, 35, 270, PROGRESS[12], isColor, PROGRESS_MAX);
    
    drawBelly(ctx, 'right', 50, 110, PROGRESS[15], isColor, PROGRESS_MAX);
    drawBelly(ctx, 'left', 50, 110, PROGRESS[14], isColor, PROGRESS_MAX);
    
    drawTreasureBag(ctx, 'body', PROGRESS[17], PROGRESS_MAX);
    drawTreasureBag(ctx, 'head', PROGRESS[16], PROGRESS_MAX);

    drawCollar(ctx, 'right', PROGRESS[9], isColor, PROGRESS_MAX);
    drawCollar(ctx, 'left', PROGRESS[8], isColor, PROGRESS_MAX);
    
    drawBell(ctx, PROGRESS[7], isColor, PROGRESS_MAX);
    
    drawHead(ctx, PROGRESS[4], isColor, PROGRESS_MAX);

    drawFace(ctx, PROGRESS[3], isColor, PROGRESS_MAX);

    drawMouth(ctx, 'head', PROGRESS[18], PROGRESS_MAX);
    drawMouth(ctx, 'body', PROGRESS[19], PROGRESS_MAX);

    drawNose(ctx, PROGRESS[2], isColor, PROGRESS_MAX);

    drawEye(ctx, 60, PROGRESS[1], PROGRESS_MAX);
    drawEye(ctx, 42, PROGRESS[0], PROGRESS_MAX);
    
    drawMoustache(ctx, PROGRESS[20], PROGRESS_MAX);

    ctx.restore();
    
    if (step <= 21) {
        window.requestAnimationFrame(() => draw(PROGRESS_MAX));
    }
}

export { draw };
