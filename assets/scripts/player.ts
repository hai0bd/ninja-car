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

    steer(angle: number, deviation: number) {
        // direction = Math sign (vec2.dot(velocity, getRelativeVector(Vector2.up)))
        // rotation += steeringAmount * steeringPower * velocity * direction
        this.node.setRotationFromEuler(0, angle, 0);
        const pos = this.node.getPosition();
        pos.x += deviation;
        if (pos.x <= -29 || pos.x >= 29) return;
        this.node.setPosition(pos);
    }
}


