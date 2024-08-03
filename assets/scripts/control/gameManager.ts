import { _decorator, CCInteger, Component, EventKeyboard, EventMouse, EventTouch, Input, input, KeyCode, lerp } from 'cc';
import { Player } from '../player';
import { CameraFollow } from '../cameraFollow';
import { MapControl } from './mapControl';
import { UIManager } from './uiManager';
import { InputKey } from '../enum';
import { HandleInput } from './handlerInput';
import { config } from '../utils/config';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Player)
    player: Player;

    @property(CameraFollow)
    mainCam: CameraFollow;

    @property(MapControl)
    map: MapControl;

    @property(CCInteger)
    setMap: number = 1;

    maxTilt = 45; // Độ nghiêng tối đa (độ)
    speedTilt = 1; // Tốc độ nghiêng

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

        const handleInput = new HandleInput();
    }

    start() {
        if (this.setMap == 1) this.map.viewMax == config.map1.maxView;
        else if (this.setMap == 2) this.map.viewMax == config.map2.maxView;
        else if (this.setMap == 3) this.map.viewMax == config.map3.maxView;
    }

    update(deltaTime: number) {
        let targetTilt = this.calculateTilt();

        const speed = this.map.speed * this.speedTilt * deltaTime;
        this.tiltAngle = lerp(this.tiltAngle, targetTilt, speed * deltaTime);

        this.player.drift(this.tiltAngle, targetTilt / 100);
    }

    calculateTilt() {
        if (this.inputKey == InputKey.Key_Up) {
            return 0;
        }
        else if (this.inputKey == InputKey.Press_Left) {
            return this.maxTilt;
        } else if (this.inputKey == InputKey.Press_Right) {
            return -this.maxTilt;
        }
    }

    onShield() {
        this.player.collider.enabled = false;
        const curentSpeed = this.map.speed;
        this.map.speed *= config.shield.upSpeed;
        this.scheduleOnce(() => {
            this.map.speed = curentSpeed;
            this.player.collider.enabled = true;
        }, config.shield.time);
    }

    addCoin() {
        /* this.player.coin++;
        //audio.play(coin)...
        UIManager.instance.coinAmount.string = this.player.coin.toString(); */
    }
}


