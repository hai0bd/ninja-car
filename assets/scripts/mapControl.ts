import { _decorator, CCFloat, Component, instantiate, math, Node, Prefab, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MapControl')
export class MapControl extends Component {
    @property(Prefab)
    viewPrefab: Prefab;

    @property(Node)
    view: Node;

    @property(CCFloat)
    speed: number;

    nextView: Node = null;

    start() {
        this.instatiateNextView();
    }

    update(deltaTime: number) {
        this.speed += 2 * deltaTime;

        if (this.nextView.position.z <= 0) {
            this.view.destroy();
            this.view = this.nextView;
            this.instatiateNextView();
        }

        this.runMap(this.view, deltaTime);
        this.runMap(this.nextView, deltaTime);
    }
    instatiateNextView() {
        this.nextView = instantiate(this.viewPrefab);
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
}


