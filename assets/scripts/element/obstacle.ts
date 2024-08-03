import { _decorator, BoxCollider, Component, ITriggerEvent, Node } from 'cc';
import { GameManager } from '../control/gameManager';
const { ccclass, property } = _decorator;

@ccclass('Obstacle')
export class Obstacle extends Component {
    @property(BoxCollider)
    collider: BoxCollider;

    start() {
        this.collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }

    onTriggerEnter(event: ITriggerEvent) {
        GameManager.instance.hitObstacle();
        console.log("hit Obstacle");
    }
}


