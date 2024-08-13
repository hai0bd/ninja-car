import { _decorator, Component, Label, Node, UITransform } from 'cc';
import { FuelBar } from '../ui/fuelBar';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    @property(UITransform)
    transform: UITransform;

    @property(FuelBar)
    fuelBar: FuelBar;

    @property(Label)
    coinAmount: Label;

    @property(Node)
    background: Node;

    @property(Node)
    losePopUp: Node;

    @property(Node)
    winPopUp: Node;

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

    onWin() {
        this.background.active = true;
        this.winPopUp.active = true;
        this.fuelBar.node.active = false;
    }

    winClick() {
        this.background.active = false;
        this.winPopUp.active = false;
        this.fuelBar.node.active = true;
    }

    onLose() {
        this.background.active = true;
        this.losePopUp.active = true;
        this.fuelBar.node.active = false;
    }

    loseClick() {
        this.background.active = false;
        this.losePopUp.active = false;
        this.fuelBar.node.active = true;
    }
}


