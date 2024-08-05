import { _decorator, BoxCollider, Component, ITriggerEvent, Node } from 'cc';
import { GameManager } from '../control/gameManager';
const { ccclass, property } = _decorator;

@ccclass('gasPump')
export class gasPump extends Component {
    @property(BoxCollider)
    collider: BoxCollider;

    start() {
        this.collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }

    onTriggerEnter(event: ITriggerEvent) {
        GameManager.instance.map.refuel();
        this.node.destroy();
    }
    onDestroy() {
        this.collider.off('onTriggerEnter');
    }
}


