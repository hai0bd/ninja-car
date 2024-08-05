import { _decorator, CCFloat, Component, CylinderCollider, input, ITriggerEvent, Node, tween, Vec3 } from 'cc';
import { GameManager } from '../control/gameManager';
const { ccclass, property } = _decorator;

@ccclass('Coin')
export class Coin extends Component {
    @property(CylinderCollider)
    collider: CylinderCollider;

    start() {
        this.collider.on('onTriggerEnter', this.onTriggerEnter, this)
    }

    onTriggerEnter(event: ITriggerEvent) {
        GameManager.instance.addCoin();
        this.node.destroy();
    }

    onDestroy() {
        this.collider.off('onTriggerEnter');
    }

}


