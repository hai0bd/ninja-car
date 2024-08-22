import { _decorator, Component, director, Label, Node, UITransform, Vec3 } from 'cc';
import { HomePopUp } from './homePopUp';
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

    @property(HomePopUp)
    popUp: HomePopUp;

    start() {
        const currentCarID = data.currentCarID;
        this.listCar.setPosition(new Vec3(currentCarID * -33, 0, 0));
    }
    onSetting() {
        this.popUp.setting.active = true;
    }

    race() {
        director.loadScene('game');
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