import { _decorator, Component, Label, Node, UITransform } from 'cc';
import { FuelBar } from '../ui/fuelBar';
import { PopUp } from '../popup';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    @property(UITransform)
    transform: UITransform;

    @property(FuelBar)
    fuelBar: FuelBar;

    @property(Label)
    coinAmount: Label;

    @property(Label)
    countDown: Label;

    @property(PopUp)
    popUp: PopUp;

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

    onCountDown(timeCountDown: number) {
        this.countDown.string = "";
        this.countDown.node.active = true;
        this.schedule(() => {
            if (timeCountDown <= 0) { this.countDown.node.active = false; return; }
            this.countDown.string = timeCountDown.toString();
            timeCountDown--;
        }, 1, timeCountDown);
    }

    onWin() {
        this.scheduleOnce(() => {
            this.popUp.background.active = true;
            this.popUp.winPopUp.active = true;
            this.fuelBar.node.active = false;
        }, 1);
    }

    winClick() {
        this.popUp.background.active = false;
        this.popUp.winPopUp.active = false;
        this.fuelBar.node.active = true;
    }

    onLose() {
        this.popUp.background.active = true;
        this.popUp.losePopUp.active = true;
        this.fuelBar.node.active = false;
    }

    loseClick() {
        this.popUp.background.active = false;
        this.popUp.losePopUp.active = false;
        this.fuelBar.node.active = true;
    }
}


