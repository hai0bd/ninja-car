import { _decorator, BoxCollider, Component, ICollisionEvent, ITriggerEvent, Node } from 'cc';
import { GameManager } from '../control/gameManager';
const { ccclass, property } = _decorator;

@ccclass('Landmine')
export class Landmine extends Component {
    @property(BoxCollider)
    collider: BoxCollider;

    start() {
        this.collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }

    onTriggerEnter(event: ITriggerEvent) {
        GameManager.instance.map.hitObstacle();
        console.log("hit");
    }
}


