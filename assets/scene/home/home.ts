import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('home')
export class home extends Component {
    isTranslate: boolean = false;
    onLoad() {
        console.log('version 1.0.6');
        utils.changeLanguage('en');
    }

    changeLanguage() {
        if (this.isTranslate) utils.changeLanguage('en');
        else utils.changeLanguage('vi');
        this.isTranslate = !this.isTranslate;
    }
}


