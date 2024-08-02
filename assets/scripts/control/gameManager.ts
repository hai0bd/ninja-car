import { _decorator, Component, EventKeyboard, EventMouse, EventTouch, Input, input, KeyCode } from 'cc';
import { Player } from '../player';
import { CameraFollow } from '../cameraFollow';
import { MapControl } from './mapControl';
import { UIManager } from './uiManager';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Player)
    player: Player;

    @property(CameraFollow)
    mainCam: CameraFollow;

    @property(MapControl)
    map: MapControl;

    fuelPercent: number;

    private static _instance: GameManager;
    public static get instance(): GameManager {
        if (!this._instance) {
            this._instance = new GameManager;
        }
        return this._instance;
    }

    onLoad() {
        if (!GameManager._instance) {
            GameManager._instance = this;
        } else {
            this.destroy();
        }
    }
    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_PRESSING, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.on(Input.EventType.MOUSE_UP, this.onKeyUp, this);
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

    /* onTouchStart(event: EventTouch) {
        if (event.getUILocation().x - 270 > 0) {
            this.moveRight();
        }
        else this.moveLeft();
    } */

    onMouseDown(event: EventMouse) {
        if (event.getButton() == EventMouse.BUTTON_RIGHT) {
            this.moveRight();
        }
        else if (event.getButton() == EventMouse.BUTTON_LEFT) {
            this.moveLeft();
        }
    }

    moveRight() {
        this.player.moveRight();
        this.mainCam.moveRight();
    }
    moveLeft() {
        this.player.moveLeft();
        this.mainCam.moveLeft();
    }

    onShield() {
        this.player.collider.enabled = false;
        this.map.speed += 100;
    }

    addCoin() {
        this.player.coin++;
        //audio.play(coin)...
        UIManager.instance.coinAmount.string = this.player.coin.toString();
    }
}


