import { _decorator, CCFloat, CCInteger, Component, Game, instantiate, math, Node, Prefab, tween, Vec3 } from 'cc';
import { GameManager } from './gameManager';
import { UIManager } from './uiManager';
import { ObjectPooling } from '../utils/patern/objectPooling';
const { ccclass, property } = _decorator;

@ccclass('MapControl')
export class MapControl extends Component {
    @property(Prefab)
    viewPrefab: Prefab[] = [];

    @property(Prefab)
    finishLine: Prefab;

    @property(Node)
    view: Node;

    @property(CCFloat)
    fuelSize: number = 1500;

    @property(CCFloat)
    speed: number = 200;

    travels: number = 0;
    stage: number; // quãng đường mà mỗi fuel có thể đi

    nextView: Node = null;
    viewPool: ObjectPooling<Node>[] = [];
    viewMax: number = 10;
    viewAmount: number = 0;
    viewIndex: number = 0;

    isPumping: boolean = false;
    isWin: boolean = false;

    /* onLoad() {
        // khởi tạo object pool cho mỗi dạng vỉew
        for (let i = 0; i < this.viewPrefab.length; i++) {
            const pool = new ObjectPooling<Node>(() => {instantiate(this.viewPrefab[i])}, (view) => {
                view.active = false;
                view.removeFromParent();
            });
            this.viewPool.push(pool);
        }

        // Khởi tạo next view
        this.instatiateNextView(0);
    } */

    start() {
        this.stage = this.fuelSize;
        this.instatiateNextView(0);
    }

    update(deltaTime: number) {
        this.speed += 2 * deltaTime;

        this.calculateFuel(deltaTime);

        if (this.viewAmount == this.viewMax) {
            const line = instantiate(this.finishLine);
            this.nextView.addChild(line);
            if (this.nextView.position.z <= -1100) {
                UIManager.instance.onWin();
                GameManager.instance.onWin();
                this.isWin = true;
            }
        }
        else {
            if (this.nextView.position.z <= 0) {
                this.view.destroy();
                /* this.view.active = false;
                this.viewPool[this.viewIndex].release(this.view); */
                this.view = this.nextView;

                this.viewAmount++;
                if (this.viewAmount % Math.floor(Math.random() * 5) == 0) {
                    this.viewIndex = Math.floor(Math.random() * this.viewPrefab.length)
                    if (this.viewIndex >= this.viewPrefab.length) this.viewIndex = 0;
                }

                this.instatiateNextView(this.viewIndex);
            }

        }

        this.runMap(this.view, deltaTime);
        this.runMap(this.nextView, deltaTime);
    }

    calculateFuel(deltaTime: number) {
        const displacement = this.speed * deltaTime; // s = v * t;
        this.travels += displacement; // tổng quãng đường đi được
        this.stage -= displacement;

        let fuelPercent = this.stage / this.fuelSize;
        if (this.stage < 0.1) { // hết nhiên liệu
            // this.stage = this.fuelSize;
            if (this.isWin) return;
            UIManager.instance.onLose();
            GameManager.instance.onLose();
            return;
        }

        UIManager.instance.fuelBar.updateBar(fuelPercent);
    }

    instatiateNextView(nextIndex: number) {
        this.nextView = instantiate(this.viewPrefab[nextIndex]);
        // this.nextView = this.viewPool[nextIndex].acquire();
        const pos = this.view.getPosition()
        pos.z += 1200;
        this.nextView.setPosition(pos);
        // this.nextView.active = true;
        this.node.addChild(this.nextView);
    }

    runMap(view: Node, deltaTime: number) {
        const pos = view.getPosition();
        pos.z -= this.speed * deltaTime;
        view.setPosition(pos);
    }

    refuel() {
        this.stage = this.fuelSize;
    }

    hitObstacle() {
        this.stage -= 100;
    }
}


