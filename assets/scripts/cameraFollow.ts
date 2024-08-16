import { _decorator, CCFloat, Component, easing, game, lerp, Mesh, Node, tween, Vec3 } from 'cc';
import { GameManager } from './control/gameManager';
import { GameState } from './enum';
import { UIManager } from './control/uiManager';
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

    @property(Node)
    frontPos: Node;

    @property(Node)
    backPos: Node;

    @property(Node)
    abovePos: Node;

    @property
    rotationDuration: number = 5; // Thời gian quay (giây)

    @property
    movementDuration: number = 5; // Thời gian lia (giây)

    @property
    rotationRadius: number = 10; // Bán kính quay

    @property
    rotationHeight: number = 5; // Độ cao của camera

    currentTargetPos: Vec3;
    timeCountDown: number = 3;
    isMoving: boolean = false;

    meshes: Mesh = new Mesh();

    start() {
        // this.offset = this.node.getPosition();
        this.currentTargetPos = this.target.getPosition();
    }

    onEnable() {
        this.introCar();
    }

    update(deltaTime: number) {
        if (this.isMoving) return;
        const pos = this.node.getPosition();
        const targetPos = this.target.getPosition().subtract(this.currentTargetPos);

        // this.node.lookAt(new Vec3(this.target.position.x));

        Vec3.slerp(pos, pos, targetPos.add(this.offset), this.speed * deltaTime);

        this.node.setPosition(pos);
    }

    rotateAroundCar() {
        if (this.isMoving) return;
        this.isMoving = true;

        let startAngle = -180;
        let endAngle = 270;

        this.node.setRotation(this.frontPos.rotation);
        this.node.setPosition(this.frontPos.position);
        tween(this.node)
            // quay xung quanh car
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
                this.isMoving = false;
                this.node.setRotationFromEuler(-9.9, 180, 0);

                let timeCountDown = 3;
                this.schedule(() => {
                    timeCountDown--;
                }, 1, timeCountDown);

                this.scheduleOnce(() => {
                    GameManager.instance.state = GameState.Playing;
                }, timeCountDown + 1);
                // Có thể thêm logic sau khi quay xong ở đây
            })
            .start();
    }

    introCar() {
        if (this.isMoving) return;
        this.isMoving = true;

        this.atBackCar();
    }

    atAboveCar() {
        this.node.setRotation(this.abovePos.rotation);
        tween(this.node)
            .to(0.5, { position: this.abovePos.position }, { easing: 'backOut' })
            .call(() => {
                this.node.setPosition(this.offset);
                this.isMoving = false;
            })
            .start();
    }

    atBackCar() {
        this.node.setRotation(this.backPos.rotation);
        this.node.setPosition(this.backPos.position);

        tween(this.node)
            .to(this.movementDuration, {}, {
                onUpdate: (target, ratio) => {
                    // Tính toán vị trí mới trên trục X
                    let startX = this.target.position.x - 5; // Vị trí bắt đầu
                    let endX = this.target.position.x + 4; // Vị trí kết thúc (chính diện target)
                    let currentX = startX + (endX - startX) * ratio;
                    const pos = this.node.getPosition()

                    // Đặt vị trí mới cho camera
                    this.camera.setPosition(new Vec3(currentX, pos.y, pos.z));
                }
            })
            .call(() => { this.atFrontCar() })
            .start();
    }

    atFrontCar() {
        this.node.setRotation(this.frontPos.rotation);
        this.node.setPosition(this.frontPos.position);

        tween(this.node)
            .to(this.movementDuration, {}, {
                onUpdate: (target, ratio) => {
                    // Tính toán vị trí mới trên trục X
                    let startX = this.target.position.x - 5; // Vị trí bắt đầu
                    let endX = this.target.position.x + 5; // Vị trí kết thúc (chính diện target)
                    let currentX = startX + (endX - startX) * ratio;
                    const pos = this.node.getPosition()

                    // Đặt vị trí mới cho camera
                    this.camera.setPosition(new Vec3(currentX, pos.y, pos.z));
                }
            })
            .call(() => {
                this.isMoving = false;
                this.node.setRotationFromEuler(-9.9, 180, 0);

                let timeCountDown = 3;
                UIManager.instance.onCountDown(timeCountDown);

                this.scheduleOnce(() => {
                    GameManager.instance.state = GameState.Playing;
                }, timeCountDown + 1);
                // Có thể thêm logic sau khi quay xong ở đây
            })
            .start();
    }
}


