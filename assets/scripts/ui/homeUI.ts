import { _decorator, Component, director, error, Label, Node, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('homeUI')
export class homeUI extends Component {
    @property(Node)
    listCar: Node;

    @property(Node)
    onLoadScene: Node;

    @property(UITransform)
    progressTransform: UITransform;

    @property(Label)
    progressLabel: Label;

    start() {
        const currentCarID = data.currentCarID;
        this.listCar.setPosition(new Vec3(currentCarID * -33, 0, 0));
    }
    race() {
        director.preloadScene('game', this.onProgress.bind(this), (err, scene) => { director.loadScene('game') });
    }

    garage() {
        director.preloadScene('select-car', this.onProgress.bind(this), (err, scene) => { director.loadScene('select-car') });
    }

    onProgress(completeCount: number, totalCount: number, item: any) {
        this.onLoadScene.active = true;
        const progress = completeCount / totalCount;
        this.progressTransform.width = 290 * progress;
        this.progressLabel.string = Math.floor((progress * 100)).toString() + '%';
    }
}


