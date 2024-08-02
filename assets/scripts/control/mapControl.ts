import { _decorator, CCFloat, Component, instantiate, math, Node, Prefab, tween, Vec3 } from 'cc';
import { GameManager } from './gameManager';
const { ccclass, property } = _decorator;

@ccclass('MapControl')
export class MapControl extends Component {
    @property(Prefab)
    viewPrefab: Prefab[] = [];

    @property(Node)
    view: Node;

    @property(CCFloat)
    fuelSize: number = 1200;

    @property(CCFloat)
    speed: number = 200;

    travels: number = 0;
    stage: number = 1200; // quãng đường mà mỗi fuel có thể đi
    viewAmount: number = 0;
    viewIndex: number = 0;
    nextView: Node = null;
    isPumping: boolean = false;

    start() {
        this.stage = this.fuelSize;
        this.instatiateNextView(0);
    }

    update(deltaTime: number) {
        if (this.isPumping) return;
        this.speed += 2 * deltaTime;
        const displacement = this.speed * deltaTime; // s = v * t;
        this.travels += displacement; // tổng quãng đường đi được
        this.stage -= displacement;

        let fuelPercent = this.stage / 1200;
        if (this.stage < 0.1) this.stage = this.fuelSize;

        GameManager.instance.fuelPercent = fuelPercent;

        if (this.nextView.position.z <= 0) {
            this.view.destroy();
            this.view = this.nextView;

            this.viewAmount++;
            if (this.viewAmount % 3 == 0) {
                this.viewIndex++;
                if (this.viewIndex >= this.viewPrefab.length) this.viewIndex = 0;
            }

            this.instatiateNextView(this.viewIndex);
        }
        /* else if (this.nextView.position.z <= -89 && this.nextView.position.z >= -85) {
            this.isPumping = true;
            this.refuel();
        } */

        this.runMap(this.view, deltaTime);
        this.runMap(this.nextView, deltaTime);
    }
    instatiateNextView(nextIndex: number) {
        this.nextView = instantiate(this.viewPrefab[nextIndex]);
        const pos = this.view.getPosition()
        pos.z += 1200;
        this.nextView.setPosition(pos);
        this.node.addChild(this.nextView);
    }

    runMap(view: Node, deltaTime: number) {
        const pos = view.getPosition();
        pos.z -= this.speed * deltaTime;
        view.setPosition(pos);
    }

    /* refuel() {
        tween(this.node)
            .delay(15)
            .call(() => { this.isPumping = false })
            .start();
    } */

    hitObstacle() {
        this.stage -= 100;
    }
}


