import { _decorator, Color, Component, Node, Sprite, UITransform } from 'cc';
import { GameManager } from '../control/gameManager';
const { ccclass, property } = _decorator;

@ccclass('fuelBar')
export class fuelBar extends Component {
    @property(Sprite)
    fuel: Sprite

    @property({ range: [0, 1], slide: true, step: 0.01 })
    progress: number = 0;

    @property(UITransform)
    fuelTransform: UITransform;

    duration = 5.5;
    time = 0;
    hue = 0;

    update(deltaTime: number) {
        this.progress = GameManager.instance.fuelPercent;
        // if (this.fuelTransform.width < 0.1) return;
        this.fuelTransform.width = 290 * this.progress;

        /* this.hue = (this.hue + deltaTime * 100) % 360; // Tăng dần hue, quay vòng từ 0 đến 360
        const color = this.hsvToRgb(this.hue, 1, 1);
        this.fuel.color = color; */

        this.time += deltaTime;

        // Tính toán hue từ 0 đến 120
        // this.progress = (this.time % this.duration) / this.duration;
        // console.log("progress ", this.progress);
        let hue = 120 * this.progress;

        const color = this.hsvToRgb(hue, 1, 1);
        this.fuel.color = color;

        /* const color = this.fuel.color;
        const r = color.x - 1;
        const g = color.y + 1;
        const b = color.z;

        this.fuel.color.set(r, g, b); */
    }
    hsvToRgb(h: number, s: number, v: number): Color {
        let r: number, g: number, b: number;

        const i = Math.floor(h / 60);
        const f = h / 60 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);

        switch (i) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = p; break; // Chúng ta chỉ cần đến đây vì hue tối đa là 120
            default: r = v, g = p, b = p; // Mặc định về đỏ nếu có lỗi
        }

        return new Color(r * 255, g * 255, b * 255);
    }
}


