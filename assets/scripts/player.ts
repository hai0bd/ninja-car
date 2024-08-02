import { _decorator, BoxCollider, Component, EventKeyboard, game, Input, input, KeyCode, Node } from 'cc';
import { InputKey } from './enum';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property(Node)
    carAnim: Node;

    @property(BoxCollider)
    collider: BoxCollider;

    coin: number = 0;

    drift(angle: number, deviation: number){
        this.node.setRotationFromEuler(0, angle, 0);
        const pos = this.node.getPosition();
        pos.x -= deviation;
        this.node.setPosition(pos);
    }
    normalMove() {
        this.node.setRotationFromEuler(0, 0, 0);
    }
}


