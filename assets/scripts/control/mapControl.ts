import { _decorator, CCFloat, CCInteger, Component, Game, instantiate, math, Node, Prefab, tween, Vec3 } from 'cc';
import { GameManager } from './gameManager';
import { UIManager } from './uiManager';
import { ObjectPool } from '../utils/patern/objectPool';
import { ViewControl } from './viewControl';
const { ccclass, property } = _decorator;

@ccclass('MapControl')
export class MapControl extends Component {
    @property([Prefab])
    viewPrefabs: Prefab[] = [];

    @property(Prefab)
    finishLine: Prefab;

    @property(Node)
    view: Node;

    @property(CCFloat)
    speed: number = 200;

    // travels: number = 0;
    stage: number; // quãng đường mà mỗi fuel có thể đi
    fuelSize: number = 1500;

    line: Node;
    nextView: Node = null;
    viewPools: ObjectPool<Node>[] = [];
    viewMax: number = 10;
    viewAmount: number = 0;
    viewIndex: number = 0;

    start() {
        // khởi tạo object pool cho mỗi dạng vỉew
        this.viewPrefabs.forEach(prefab => {
            const pool = new ObjectPool<Node>(
                () => instantiate(prefab),
                (node: Node) => {
                    node.removeFromParent();
                    node.active = false;
                }
            );
            this.viewPools.push(pool);
        })

        this.instatiateNextView(0);

        this.stage = this.fuelSize;
    }

    update(deltaTime: number) {
        this.speed += 2 * deltaTime;

        // this.calculateFuel(deltaTime);

        if (this.viewAmount == this.viewMax) {
            if (this.nextView.position.z <= -1100) {
                UIManager.instance.onWin();
                GameManager.instance.onWin();
            }
            else if (!this.line) {
                this.line = instantiate(this.finishLine);
                this.nextView.addChild(this.line);
            }
        }
        else {
            if (this.nextView && this.nextView.position.z <= 0) {
                if (this.view) {
                    this.releaseView(this.view);
                }
                this.view = this.nextView;
                // console.log(this.viewAmount);
                this.viewAmount++;
                if (this.viewAmount % 3 == 0) {
                    this.viewIndex++;
                    if (this.viewIndex >= this.viewPrefabs.length) this.viewIndex = 0;
                }
                this.instatiateNextView(this.viewIndex);
            }
        }

        this.runMap(this.view, deltaTime);
        this.runMap(this.nextView, deltaTime);
    }

    private calculateFuel(deltaTime: number) {
        const displacement = this.speed * deltaTime; // s = v * t;
        // this.travels += displacement; // tổng quãng đường đi được
        this.stage -= displacement;

        let fuelPercent = this.stage / this.fuelSize;
        if (this.stage < 0.1) { // hết nhiên liệu
            // this.stage = this.fuelSize;
            UIManager.instance.onLose();
            GameManager.instance.onLose();
            return;
        }

        UIManager.instance.fuelBar.updateBar(fuelPercent);
    }

    private instatiateNextView(nextIndex: number) {
        this.nextView = this.acquireView(nextIndex);
        const pos = this.view!.getPosition()
        pos.z += 1200;
        this.nextView.setPosition(pos);
        this.node.addChild(this.nextView);
    }

    private runMap(view: Node, deltaTime: number) {
        const pos = view.getPosition();
        pos.z -= this.speed * deltaTime;
        view.setPosition(pos);
    }

    private acquireView(index: number): Node {
        const view = this.viewPools[index].acquire();
        /* const viewControl = view.getComponent(ViewControl);
        if (viewControl) {
            viewControl.resetView();
        } */
        view.active = true;
        return view;
    }

    private releaseView(view: Node) {
        /* const viewControl = view.getComponent(ViewControl);
        if (viewControl) {
            viewControl.clearNode();
        } */
        const index = this.viewPrefabs.findIndex(prefab => prefab.name === view.name);
        if (index != -1) {
            this.viewPools[index].release(view);
        }
        else view.destroy();
    }

    refuel() {
        this.stage = this.fuelSize;
    }

    hitObstacle() {
        this.stage -= 100;
    }
}


