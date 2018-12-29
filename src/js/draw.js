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

const PROGESS = Array.from({length: 21}).fill(0); // 所有步骤的进程
let step = 0; // 步骤

const draw = () => {
    ctx.clearRect(0, 0, 300, 300); // 清屏
    ctx.fillStyle = '#000';
    ctx.strokeStyle = '#000';
    ctx.save();

    step = step + (PROGESS[step] >= 50) | 0;
    PROGESS[step] = PROGESS[step] + (PROGESS[step] < 50) * 0.4;
    
    drawMoustache(PROGESS[20]);
    drawMouth('body', PROGESS[19]);
    drawMouth('head', PROGESS[18]);
    drawTreasureBag('body', PROGESS[17]);
    drawTreasureBag('head', PROGESS[16]);
    drawBelly('right', 50, 110, PROGESS[15]);
    drawBelly('left', 50, 110, PROGESS[14]);
    drawFoot(65, 270, PROGESS[13]);
    drawFoot(35, 270, PROGESS[12]);
    drawBody([72, 88], [86, 110], [74, 130], PROGESS[11]);
    drawBody([28, 88], [14, 110], [26, 130], PROGESS[10]);
    drawCollar('right', PROGESS[9]);
    drawCollar('left', PROGESS[8]);
    drawBell(PROGESS[7]);
    drawHand([75, 80], [95, 100], [90, 110], PROGESS[6]);
    drawHand([25, 80], [5, 100], [10, 110], PROGESS[5]);
    drawHead(PROGESS[4]);
    drawFace(PROGESS[3]);
    drawNose(PROGESS[2]);
    drawEye(60, PROGESS[1]);
    drawEye(42, PROGESS[0]);

    ctx.restore();
    if (step <= 20) {
        window.requestAnimationFrame(draw);
    }
}
export { draw };
