import { draw } from './draw';

const init = (PROGRESS_MAX = 50) => {
    window.requestAnimationFrame(() => draw(PROGRESS_MAX));
}

export { init };
