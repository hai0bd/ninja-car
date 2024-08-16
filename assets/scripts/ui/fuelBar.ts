import { _decorator, Color, Component, Node, Sprite, UITransform } from 'cc';
import { GameManager } from '../control/gameManager';
const { ccclass, property } = _decorator;

@ccclass('FuelBar')
export class FuelBar extends Component {
    @property(Sprite)
    fuel: Sprite

    @property({ range: [0, 1], slide: true, step: 0.01 })
    progress: number = 0;

    @property(UITransform)
    fuelTransform: UITransform;

    duration = 5.5;
    time = 0;
    hue = 0;

    updateBar(fuelPercent: number) {
        this.progress = fuelPercent;
        this.fuelTransform.width = 290 * this.progress;
        
        let hue = 120 * this.progress;
        const color = this.hsvToRgb(hue, 1, 1);
        this.fuel.color = color;
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


