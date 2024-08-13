import { _decorator, CCFloat, Component, game, lerp, Mesh, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraFollow')
export class CameraFollow extends Component {
    @property(Node)
    camera: Node;

    @property(Node)
    target: Node;

    @property(CCFloat)
    speed: number;

    @property({ type: Vec3 })
    offset: Vec3 = new Vec3();

    @property
    rotationDuration: number = 5; // Thời gian quay (giây)

    @property
    rotationRadius: number = 10; // Bán kính quay

    @property
    rotationHeight: number = 5; // Độ cao của camera

    isRotating: boolean = false;
    currentTargetPos: Vec3;

    meshes: Mesh = new Mesh();

    start() {
        this.offset = this.node.getPosition();
        this.currentTargetPos = this.target.getPosition();
        this.rotateAroundCar();
    }

    rotateAroundCar() {
        if (this.isRotating) return;
        this.isRotating = true;

        let startAngle = -180;
        let endAngle = 180;

        tween(this.node)
            .to(this.rotationDuration, {}, {
                onUpdate: (target, ratio) => {
                    let currentAngle = startAngle + (endAngle - startAngle) * ratio;
                    let radian = currentAngle * Math.PI / 180;

                    let x = this.target.position.x + this.rotationRadius * Math.cos(radian);
                    let z = this.target.position.z + this.rotationRadius * Math.sin(radian);

                    this.camera.setPosition(new Vec3(x, this.target.position.y + this.rotationHeight, z));
                    this.camera.lookAt(this.target.position);
                }
            })
            .call(() => {
                this.isRotating = false;
                this.node.setRotationFromEuler(-9.9, 180, 0);
                // Có thể thêm logic sau khi quay xong ở đây
            })
            .start();
    }

    update(deltaTime: number) {
        if (this.isRotating) return;
        const pos = this.node.getPosition();
        const targetPos = this.target.getPosition().subtract(this.currentTargetPos);

        // this.node.lookAt(new Vec3(this.target.position.x));

        Vec3.slerp(pos, pos, targetPos.add(this.offset), this.speed * deltaTime);

        this.node.setPosition(pos);
    }
}


