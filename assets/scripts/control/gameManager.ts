import { _decorator, Component, EventKeyboard, EventMouse, EventTouch, Input, input, KeyCode } from 'cc';
import { Player } from '../player';
import { CameraFollow } from '../cameraFollow';
import { MapControl } from './mapControl';
import { UIManager } from './uiManager';
import { InputKey } from '../enum';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Player)
    player: Player;

    @property(CameraFollow)
    mainCam: CameraFollow;

    @property(MapControl)
    map: MapControl;

    MAX_TILT = 45; // Độ nghiêng tối đa (độ)
    TILT_SPEED = 2; // Tốc độ nghiêng

    fuelPercent: number;
    tiltAngle: number = 0;
    inputKey: InputKey = InputKey.Key_Up;

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
            this.inputKey = InputKey.Press_Right;
        }
        else if (event.keyCode == KeyCode.ARROW_LEFT || event.keyCode == KeyCode.KEY_A) {
            this.inputKey = InputKey.Press_Left;
        }
    }
    onKeyUp() {
        this.inputKey = InputKey.Key_Up;
    }

    /* onTouchStart(event: EventTouch) {
        if (event.getUILocation().x - 270 > 0) {
            this.inputKey = InputKey.Press_Right;
        }
        else this.inputKey = InputKey.Press_Left;
    } */

    onMouseDown(event: EventMouse) {
        if (event.getButton() == EventMouse.BUTTON_RIGHT) {
            this.inputKey = InputKey.Press_Right;
        }
        else if (event.getButton() == EventMouse.BUTTON_LEFT) {
            this.inputKey = InputKey.Press_Left;
        }
    }

    update(deltaTime: number){
        let targetTilt = 0;

        if(this.inputKey == InputKey.Key_Up){
            this.player.normalMove();
        }
        else if (this.inputKey == InputKey.Press_Left) {
            targetTilt = this.MAX_TILT;
        } else if (this.inputKey == InputKey.Press_Right) {
            targetTilt = -this.MAX_TILT;
        }

        // Interpolate tilt angle
        this.tiltAngle = lerp(this.tiltAngle, targetTilt, this.TILT_SPEED * deltaTime);

        // Apply rotation
        // this.player.node.setRotationFromEuler(0, this.tiltAngle, 0);
        this.player.drift(this.tiltAngle, targetTilt / 100);
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
function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
}

