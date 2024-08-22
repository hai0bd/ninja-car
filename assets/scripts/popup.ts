import { _decorator, Component, Node } from 'cc';
import { GameManager } from './control/gameManager';
import { UIManager } from './control/uiManager';
const { ccclass, property } = _decorator;

@ccclass('PopUp')
export class PopUp extends Component {
    @property(Node)
    background: Node;

    @property(Node)
    winPopUp: Node;

    @property(Node)
    losePopUp: Node;

    onNextLevelClick() {
        console.clear();
        GameManager.instance.nextLevel();
        UIManager.instance.winClick();
    }

    onReplayClick() {
        console.clear();
        GameManager.instance.resetMap();
        UIManager.instance.loseClick();
        UIManager.instance.winClick();
    }
}


