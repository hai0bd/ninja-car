import { _decorator, CCFloat, Component, instantiate, math, Node, Prefab, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MapControl')
export class MapControl extends Component {
    @property(Prefab)
    viewPrefab: Prefab;

    @property(CCFloat)
    speed: number;

    @property(Prefab)
    coinsPrefabs: Prefab[] = [];

    @property(Node)
    view: Node;

    nextView: Node = null;
    coins: Node[] = [];

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

        // console.log(math.randomRange(0, this.coins.length - 1));

        const coin = instantiate(this.coinsPrefabs[Math.floor(math.randomRange(0, this.coinsPrefabs.length - 1))]);
        coin.setPosition(new Vec3(0, 0, 0));
        this.nextView.addChild(coin);
        this.coins.push(coin);

        this.nextView.setPosition(pos);
        this.node.addChild(this.nextView);
    }
    runMap(view: Node, deltaTime: number) {
        const pos = view.getPosition();
        pos.z -= this.speed * deltaTime;
        view.setPosition(pos);
    }
}


