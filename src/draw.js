import { ctx } from './context';
import { drawHead } from './draw-head';
import { drawFace } from './draw-face';
import { drawEye } from './draw-eye';
import { drawNose } from './draw-nose';
import { drawHand } from './draw-hand';
import { drawBell } from './draw-bell';
import { drawCollar } from './draw-collar';
import { drawBody } from './draw-body';
import { drawBelly } from './draw-belly';
import { drawFoot } from './draw-foot';
import { drawTreasureBag } from './draw-treasure_bag';
import { drawMouth } from './draw-mouth';
import { drawMoustache } from './draw-moustache';

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
    
    drawHand('right', [75, 80], [95, 100], [90, 110], PROGRESS[6], isColor, PROGRESS_MAX);
    drawHand('left', [25, 80], [5, 100], [10, 110], PROGRESS[5], isColor, PROGRESS_MAX);
    
    drawBody([72, 88], [86, 110], [74, 130], PROGRESS[11], isColor, PROGRESS_MAX);
    drawBody([28, 88], [14, 110], [26, 130], PROGRESS[10], isColor, PROGRESS_MAX);
    
    drawFoot(65, 270, PROGRESS[13], isColor, PROGRESS_MAX);
    drawFoot(35, 270, PROGRESS[12], isColor, PROGRESS_MAX);
    
    drawBelly('right', 50, 110, PROGRESS[15], isColor, PROGRESS_MAX);
    drawBelly('left', 50, 110, PROGRESS[14], isColor, PROGRESS_MAX);
    
    drawTreasureBag('body', PROGRESS[17], PROGRESS_MAX);
    drawTreasureBag('head', PROGRESS[16], PROGRESS_MAX);

    drawCollar('right', PROGRESS[9], isColor, PROGRESS_MAX);
    drawCollar('left', PROGRESS[8], isColor, PROGRESS_MAX);
    
    drawBell(PROGRESS[7], isColor, PROGRESS_MAX);
    
    drawHead(PROGRESS[4], isColor, PROGRESS_MAX);

    drawFace(PROGRESS[3], isColor, PROGRESS_MAX);

    drawMouth('head', PROGRESS[18], PROGRESS_MAX);
    drawMouth('body', PROGRESS[19], PROGRESS_MAX);

    drawNose(PROGRESS[2], isColor, PROGRESS_MAX);

    drawEye(60, PROGRESS[1], PROGRESS_MAX);
    drawEye(42, PROGRESS[0], PROGRESS_MAX);
    
    drawMoustache(PROGRESS[20], PROGRESS_MAX);

    ctx.restore();
    
    if (step <= 21) {
        window.requestAnimationFrame(() => draw(PROGRESS_MAX));
    }
}

export { draw };
