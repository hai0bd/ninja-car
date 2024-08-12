import { _decorator, CCFloat, Component, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FloatingItem')
export class FloatingItem extends Component {
    @property(CCFloat)
    floatAmplitude: number = 10;  // Biên độ dao động (chiều cao của chuyển động lên xuống)

    @property(CCFloat)
    floatDuration: number = 2;  // Thời gian dao động

    @property(CCFloat)
    rotationSpeed: number = 30;

    start() {
        this.startFloating();
    }

    init(delay: number) {
        this.scheduleOnce(() => {
            this.startFloating();
        }, delay / 4);
    }

    startFloating() {
        // Tạo hiệu ứng tween để di chuyển đối tượng lên và xuống
        tween(this.node)
            .repeatForever(
                tween()
                    .by(this.floatDuration, { position: new Vec3(0, this.floatAmplitude, 0) }, { easing: 'sineInOut' })
                    .by(this.floatDuration, { position: new Vec3(0, -this.floatAmplitude, 0) }, { easing: 'sineInOut' })
            )
            .start();
        // Tạo hiệu ứng xoay vòng tròn
        tween(this.node)
            .repeatForever(
                tween()
                    .by(.5, { eulerAngles: new Vec3(0, this.rotationSpeed, 0) }) // Xoay theo trục y
            )
            .start();
    }
}


