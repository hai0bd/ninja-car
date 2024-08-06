import { _decorator, Camera, CCInteger, Component, director, EventKeyboard, EventMouse, EventTouch, Input, input, instantiate, KeyCode, lerp, Prefab, profiler, sys, TextureCube, Vec3 } from 'cc';
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

    @property(Prefab)
    mapPrefab: Prefab;

    @property(CCInteger)
    mapIndex: number = 0;

    @property(TextureCube)
    nightSkyBox: TextureCube;

    map: MapControl;

    maxTilt = 35; // Độ nghiêng tối đa (độ)
    speedTilt = 4; // Tốc độ nghiêng

    fuelPercent: number;
    tiltAngle: number = 0;

    isSpeedUp: boolean = false;

    inputKey: InputKey = InputKey.Key_Up;

    private static _instance: GameManager;
    public static get instance(): GameManager {
        if (!this._instance) {
            this._instance = new GameManager;
        }
        return this._instance;
    }

    onLoad() {
        // console.log(skybox);
        // skybox.setSkyboxMaterial()
        // skybox.envmap = 
        if (!GameManager._instance) {
            GameManager._instance = this;
        } else {
            this.destroy();
        }

        const handleInput = new HandleInput();
        profiler.showStats();
        console.log("version 1.0.4");
    }

    start() {
        // const skybox = director.root.pipeline.pipelineSceneData.skybox;
        this.nextLevel();
    }

    update(deltaTime: number) {
        let targetTilt = this.calculateTilt();

        const speed = this.map.speed * this.speedTilt * deltaTime;
        this.tiltAngle = lerp(this.tiltAngle, targetTilt, speed * deltaTime);

        this.player.steer(this.tiltAngle, targetTilt * 0.02);
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
        if (this.isSpeedUp) return;
        this.isSpeedUp = true;
        const curentSpeed = this.map.speed;
        this.map.speed *= config.shield.upSpeed;
        this.scheduleOnce(() => {
            this.map.speed = curentSpeed;
            this.isSpeedUp = false;
        }, config.shield.time);
    }

    hitObstacle() {
        if (this.isSpeedUp) return;
        this.player.blink();
        this.map.hitObstacle();
    }

    addCoin() {
        this.player.coin++;
        //audio.play(coin)...
        UIManager.instance.coinAmount.string = this.player.coin.toString();
    }

    onWin() {
        // play hiệu ứng pháo hoa
        // ..

        this.gamePause();

        // lưu best score
        if (this.mapIndex == 3) {
            sys.localStorage.setItem("playerCoins", this.player.coin);
        }
    }

    onLose() {
        this.gamePause();
    }

    gamePause() {
        this.map.enabled = false;
        this.player.collider.enabled = false;
        this.mainCam.enabled = false;
    }

    nextLevel() {
        this.mapIndex++;
        this.resetMap()

    }

    resetMap() {
        this.resetPlayer();

        this.mainCam.enabled = true;

        const nextMap = instantiate(this.mapPrefab);
        if (this.map) this.map.node.destroy();
        this.map = nextMap.getComponent(MapControl);
        this.node.addChild(nextMap);

        switch (this.mapIndex) {
            case 1: {
                this.map.viewMax = config.map1.maxView;
                this.map.speed = 100;
                return;
            }
            case 2: {
                this.map.viewMax = config.map2.maxView;
                this.map.speed = 200;
                return;
            }
            case 3: {
                this.map.viewMax = config.map3.maxView;
                this.map.speed = 300;
                return;
            }
        }
    }

    resetPlayer() {
        this.player.coin = 0;
        this.player.collider.enabled = true;

        const pos = this.player.node.getPosition();
        pos.x = 0;
        this.player.node.setPosition(pos);

        this.player.node.setRotationFromEuler(Vec3.ZERO);

        UIManager.instance.coinAmount.string = '0';
    }
}


