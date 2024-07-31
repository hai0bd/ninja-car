import { _decorator, CCFloat, Component, game, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraFollow')
export class CameraFollow extends Component {
    @property(CCFloat)
    duration: number;

    isMoving: boolean = false;

    /* moveRight() {
        if (this.node.position.x <= -25) return;
        const pos = this.node.getPosition();
        pos.x -= 25;
        this.node.setPosition(pos);
    }
    moveLeft() {
        if (this.node.position.x >= 25) return;
        const pos = this.node.getPosition();
        pos.x += 25;
        this.node.setPosition(pos);
    } */

    moveRight() {
        /* if (this.node.position.x <= -25) return;
        const pos = this.node.getPosition();
        tween(this.node)
            .to(this.duration, { position: new Vec3(pos.x - 25, pos.y, pos.z) }, { easing: 'quadOut' })
            .start(); */
    }

    moveLeft() {
        /* if (this.node.position.x >= 25) return;
        const pos = this.node.getPosition();
        tween(this.node).to(this.duration, { position: new Vec3(pos.x + 25, pos.y, pos.z) }, { easing: 'cubicOut' }).start(); */
    }
}


