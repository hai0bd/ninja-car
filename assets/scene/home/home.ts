import { _decorator, Component, macro, Node, ResolutionPolicy, screen, Size, view } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('home')
export class home extends Component {
    isTranslate: boolean = false;
    onLoad() {
        console.log('version 1.0.7');
        utils.changeLanguage('en');
        /* // screen.orientation.lock()
        let frameSize = screen.windowSize;
        view.setOrientation(macro.ORIENTATION_LANDSCAPE)
        if (frameSize.height > frameSize.width)
            screen.windowSize = new Size(frameSize.height, frameSize.width)
        // this.canvas.designResolution =  new Size(1280,720)
        view.setDesignResolutionSize(1280, 720, ResolutionPolicy.FIXED_WIDTH); */
    }

    changeLanguage() {
        if (this.isTranslate) utils.changeLanguage('en');
        else utils.changeLanguage('vi');
        this.isTranslate = !this.isTranslate;
    }
}


