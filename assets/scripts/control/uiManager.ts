import { _decorator, Component, Label, Node } from 'cc';
import { FuelBar } from '../ui/fuelBar';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    @property(FuelBar)
    fuelBar: FuelBar;
    
    @property(Label)
    coinAmount: Label;

    private static _instance: UIManager;
    public static get instance(): UIManager {
        if (!this._instance) {
            this._instance = new UIManager;
        }
        return this._instance;
    }

    onLoad() {
        if (!UIManager._instance) {
            UIManager._instance = this;
        } else {
            this.destroy();
        }
    }
}


