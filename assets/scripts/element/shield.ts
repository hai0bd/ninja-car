import { _decorator, BoxCollider, Component, ITriggerEvent, Node } from 'cc';
import { Layer } from '../enum';
import { GameManager } from '../control/gameManager';
const { ccclass, property } = _decorator;

@ccclass('Shield')
export class Shield extends Component {
    @property(BoxCollider)
    collider: BoxCollider;

    start() {
        this.collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }

    onTriggerEnter(event: ITriggerEvent) {
        if (event.otherCollider.node.layer == Layer.Player) {
            GameManager.instance.onShield();
        }
    }
}


