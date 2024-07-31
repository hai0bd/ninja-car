import { _decorator, Component, EventKeyboard, game, Input, input, KeyCode, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property(Node)
    carAnim: Node;

    moveRight() {
        if (this.node.position.x <= -25) return;
        const pos = this.node.getPosition();
        const rot = this.carAnim.eulerAngles.clone();
        rot.y = -135;
        this.carAnim.setRotationFromEuler(rot);
        pos.x -= 12.5;
        this.node.setPosition(pos);
    }
    moveLeft() {
        if (this.node.position.x >= 25) return;
        const pos = this.node.getPosition();
        const rot = this.carAnim.eulerAngles.clone();
        rot.y = -45;
        this.carAnim.setRotationFromEuler(rot);
        pos.x += 12.5;
        this.node.setPosition(pos);
    }
    normalMove() {
        const rot = this.carAnim.eulerAngles.clone();
        rot.y = -90;
        this.carAnim.setRotationFromEuler(rot);
    }
}


