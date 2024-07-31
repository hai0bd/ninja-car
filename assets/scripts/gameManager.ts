import { _decorator, Component, EventKeyboard, EventTouch, Input, input, KeyCode } from 'cc';
import { Player } from './player';
import { CameraFollow } from './cameraFollow';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Player)
    player: Player;

    @property(CameraFollow)
    mainCam: CameraFollow;

    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_PRESSING, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_END, this.onKeyUp, this);
    }

    onKeyDown(event: EventKeyboard) {
        if (event.keyCode == KeyCode.ARROW_RIGHT || event.keyCode == KeyCode.KEY_D) {
            this.moveRight();
        }
        else if (event.keyCode == KeyCode.ARROW_LEFT || event.keyCode == KeyCode.KEY_A) {
            this.moveLeft();
        }
    }
    onKeyUp() {
        this.player.normalMove();
    }

    onTouchStart(event: EventTouch) {
        if (event.getUILocation().x - 270 > 0) {
            this.moveRight();
        }
        else this.moveLeft();
    }
    moveRight() {
        this.player.moveRight();
        this.mainCam.moveRight();
    }
    moveLeft() {
        this.player.moveLeft();
        this.mainCam.moveLeft();
    }
}


