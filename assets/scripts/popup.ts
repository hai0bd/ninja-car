import { _decorator, Component, Node } from 'cc';
import { GameManager } from './control/gameManager';
import { UIManager } from './control/uiManager';
const { ccclass, property } = _decorator;

@ccclass('PopUp')
export class PopUp extends Component {
    onNextLevelClick(){
        console.clear();
        GameManager.instance.nextLevel();
        UIManager.instance.winClick();
    }

    onReplayClick(){
        GameManager.instance.resetMap();
        UIManager.instance.winClick();
    }
}


