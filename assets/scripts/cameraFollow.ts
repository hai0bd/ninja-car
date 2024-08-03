import { _decorator, CCFloat, Component, game, lerp, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraFollow')
export class CameraFollow extends Component {
    @property(Node)
    target: Node;

    @property(CCFloat)
    speed: number;

    offset: Vec3 = new Vec3();
    isMoving: boolean = false;
    currentTargetPos: Vec3;

    start() {
        this.offset = this.node.getPosition();
        this.currentTargetPos = this.target.getPosition();
    }

    update(deltaTime: number) {
        const pos = this.node.getPosition();
        const targetPos = this.target.getPosition().subtract(this.currentTargetPos);

        Vec3.slerp(pos, pos, targetPos.add(this.offset), this.speed * deltaTime);

        this.node.setPosition(pos);
    }
}


