import { _decorator, CCInteger, Component, instantiate, macro, Prefab, profiler, ResolutionPolicy, screen, Size, sys, TextureCube, Vec3, view } from 'cc';
import { Player } from '../player';
import { CameraFollow } from '../cameraFollow';
import { MapControl } from './mapControl';
import { UIManager } from './uiManager';
import { GameState, InputKey } from '../enum';
import { HandleInput } from './handlerInput';
import { config } from '../utils/config';
import { tiltLerp } from '../utils/utils';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Player)
    player: Player;

    @property(CameraFollow)
    mainCam: CameraFollow;

    @property(Prefab)
    mapPrefab: Prefab;

    @property(Prefab)
    cars: Prefab[] = [];

    @property(CCInteger)
    mapIndex: number = 0;

    map: MapControl;

    maxTilt = 35; // Độ nghiêng tối đa (độ)
    speedTilt = 4; // Tốc độ nghiêng
    targetTilt = 0;

    fuelPercent: number;
    tiltAngle: number = 0;

    isSpeedUp: boolean = false;

    inputKey: InputKey = InputKey.Key_Up;
    state: GameState = GameState.Waiting;

    private static _instance: GameManager;
    public static get instance(): GameManager {
        if (!this._instance) {
            this._instance = new GameManager;
        }
        return this._instance;
    }

    onLoad() {
        // const skybox = director.root.pipeline.pipelineSceneData.skybox;
        // skybox.envmap = 
        if (!GameManager._instance) {
            GameManager._instance = this;
        } else {
            this.destroy();
        }
        /* // screen.orientation.lock()
        let frameSize = screen.windowSize;
        view.setOrientation(macro.ORIENTATION_LANDSCAPE)
        if (frameSize.height > frameSize.width)
            screen.windowSize = new Size(frameSize.height, frameSize.width)
        // this.canvas.designResolution =  new Size(1280,720)
        view.setDesignResolutionSize(1280, 720, ResolutionPolicy.FIXED_WIDTH); */
    }

    start() {
        profiler.showStats();
        const handleInput = new HandleInput();
        const currentCar = data.currentCarID;
        const carModel = instantiate(this.cars[currentCar]);
        this.player.node.addChild(carModel);
        this.player.carModel = carModel;
        this.nextLevel();
    }

    update(deltaTime: number) {
        if (this.state != GameState.Playing) return;
        // let targetTilt = this.calculateTilt();

        const speed = this.map.speed * this.speedTilt * 0.0165;
        this.tiltAngle = tiltLerp(this.tiltAngle, this.targetTilt, speed * 0.0165);

        this.player.steer(this.tiltAngle, this.targetTilt * 0.03);
    }

    calculateTilt() {
        if (this.inputKey == InputKey.Key_Up) {
            this.targetTilt = 0;
        }
        else if (this.inputKey == InputKey.Press_Left) {
            this.targetTilt = this.maxTilt;
        } else if (this.inputKey == InputKey.Press_Right) {
            this.targetTilt = -this.maxTilt;
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

    activeBomb() {
        this.map.activeBomb();
    }

    onWin() {
        this.mainCam.atAboveCar();
        this.scheduleOnce(() => {
            this.gamePause();

            // lưu best score
            if (this.mapIndex == 3 /* && bestScore < this.player.coin */) {
                sys.localStorage.setItem("playerCoins", this.player.coin);
            }
        }, 1);
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
        UIManager.instance.fuelBar.updateBar(1);

        const nextMap = instantiate(this.mapPrefab);
        if (this.map) {
            if (this.map.line) this.map.line.destroy();
            this.map.clearView();
            this.map.node.destroy();
        }
        this.map = nextMap.getComponent(MapControl);
        this.node.addChild(nextMap);

        switch (this.mapIndex) {
            case 1: {
                this.map.viewMax = config.map1.maxView;
                this.map.speed = config.map1.speed;
                this.map.fuelSize = config.map1.fuelSize;
                return;
            }
            case 2: {
                this.map.viewMax = config.map2.maxView;
                this.map.speed = config.map2.speed;
                this.map.fuelSize = config.map2.fuelSize;
                return;
            }
            case 3: {
                this.map.viewMax = config.map3.maxView;
                this.map.speed = config.map3.speed;
                this.map.fuelSize = config.map3.fuelSize;
                return;
            }
        }
    }

    resetPlayer() {
        // this.player.coin = 0;
        this.player.collider.enabled = true;

        const pos = this.player.node.getPosition();
        pos.x = 0;
        this.player.node.setPosition(pos);
        this.player.node.setRotationFromEuler(Vec3.ZERO);

        // UIManager.instance.coinAmount.string = '0';
    }
}


