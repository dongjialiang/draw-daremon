import { canvas, ctx } from './context';
const init = () => {
    window.requestAnimationFrame(draw);
}
let headSpeed = 0.1; // 头的绘制进度
let leftEyeSpeed = 0.1; // 左眼的绘制进度
let rightEyeSpeed = 0.1; // 右眼的绘制进度
let noseSpeed = 0.1; // 鼻子的绘制进度
let faceSpeed = 0.1; // 脸的绘制进度
let leftHandSpeed = 0.1; // 左手的绘制进度
let rightHandSpeed = 0.1; // 右手的绘制进度
let bellSpeed = 0.1; // 铃铛的绘制进度
let lCollarSpeed = 0.1; // 项圈左边的绘制进度
let rCollarSpeed = 0.1; // 项圈右边的绘制进度
let lBodySpeed = 0.1; // 身体左边的绘制进度
let rBodySpeed = 0.1; // 身体右边的绘制进度
let lFootSpeed = 0.1; // 左足的绘制进度
let rFootSpeed = 0.1; // 右足的绘制进度
let lBellySpeed = 0.1; // 肚子左边的绘制进度
let rBellySpeed = 0.1; // 肚子右边的绘制进度
let hTreasureBagSpeed = 0.1; // 百宝袋开口处的绘制进度
let bTreasureBagSpeed = 0.1; // 百宝袋下沿的绘制进度
let hMouthSpeed = 0.1; // 上嘴唇的绘制进度
let bMouthSpeed = 0.1; // 下嘴唇的绘制进度
let MoustacheSpeed = 0.1; // 胡子的绘制进度
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
const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // x, y, w, h
    ctx.fillStyle = '#000';
    ctx.strokeStyle = '#000';
    ctx.save();

    switch (true) {
        case bMouthSpeed === 50:
            MoustacheSpeed = MoustacheSpeed >= 50 ? 50 : MoustacheSpeed + 0.2;
            drawMoustache(MoustacheSpeed);
        case hMouthSpeed === 50:
            bMouthSpeed = bMouthSpeed >= 50 ? 50 : bMouthSpeed + 0.4;
            drawMouth('body', bMouthSpeed);
        case bTreasureBagSpeed === 50:
            hMouthSpeed = hMouthSpeed >= 50 ? 50 : hMouthSpeed + 0.4;
            drawMouth('head', hMouthSpeed);
        case hTreasureBagSpeed === 50:
            bTreasureBagSpeed = bTreasureBagSpeed >= 50 ? 50 : bTreasureBagSpeed + 0.3;
            drawTreasureBag('body', bTreasureBagSpeed);
        case rBellySpeed === 50:
            hTreasureBagSpeed = hTreasureBagSpeed >= 50 ? 50 : hTreasureBagSpeed + 0.3;
            drawTreasureBag('head', hTreasureBagSpeed);
        case lBellySpeed === 50:
            rBellySpeed = rBellySpeed >= 50 ? 50 : rBellySpeed + 0.5;
            drawBelly('right', 50, 110, rBellySpeed);
        case rFootSpeed >= 50:
            lBellySpeed = lBellySpeed >= 50 ? 50 : lBellySpeed + 0.5;
            drawBelly('left', 50, 110, lBellySpeed);
        case lFootSpeed >= 50:
            rFootSpeed += 0.5;
            drawFoot(65, 270, rFootSpeed);
        case rBodySpeed === 50:
            lFootSpeed += 0.5;
            drawFoot(35, 270, lFootSpeed);
        case lBodySpeed === 50:
            rBodySpeed = rBodySpeed >= 50 ? 50 : rBodySpeed + 0.5;
            drawBody([72, 88], [86, 110], [74, 130], rBodySpeed);
        case rCollarSpeed === 50:
            lBodySpeed = lBodySpeed >= 50 ? 50 : lBodySpeed + 0.5;
            drawBody([28, 88], [14, 110], [26, 130], lBodySpeed);
        case lCollarSpeed === 50:
            rCollarSpeed = rCollarSpeed >= 50 ? 50 : rCollarSpeed + 0.5;
            drawCollar('right', rCollarSpeed);
        case bellSpeed >= 50:
            lCollarSpeed = lCollarSpeed >= 50 ? 50 : lCollarSpeed + 0.5;
            drawCollar('left', lCollarSpeed);
        case rightHandSpeed >= 50:
            bellSpeed += 0.2;
            drawBell(bellSpeed);
        case leftHandSpeed === 50:
            rightHandSpeed = rightHandSpeed >= 50 ? 50 : rightHandSpeed + 0.3;
            drawHand([75, 80], [95, 100], [90, 110], rightHandSpeed);
        case headSpeed >= 50:
            leftHandSpeed = leftHandSpeed >= 50 ? 50 : leftHandSpeed + 0.3;
            drawHand([25, 80], [5, 100], [10, 110], leftHandSpeed);
        case faceSpeed === 50:
            headSpeed += 0.2;
            drawHead(headSpeed);
        case noseSpeed >= 50:
            faceSpeed = faceSpeed >= 50 ? 50 : faceSpeed + 0.4;
            drawFace(faceSpeed);
        case rightEyeSpeed >= 50:
            noseSpeed += 0.3;
            drawNose(noseSpeed);
        case leftEyeSpeed >= 50:
            rightEyeSpeed += 0.3;
            drawEye(60, rightEyeSpeed);
        case leftEyeSpeed < 50:
            leftEyeSpeed += 0.3;
            drawEye(42, leftEyeSpeed);
            break;
        default:
            break;
    }

    ctx.restore();
    window.requestAnimationFrame(draw);
}
init();