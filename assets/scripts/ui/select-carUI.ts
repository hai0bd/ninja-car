import { _decorator, Button, Component, director, Node, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('select_carUI')
export class select_carUI extends Component {
    @property(Node)
    listCar: Node;

    @property(Button)
    buttonBuy: Button;

    currentCarID: number = 0;

    backScene() {
        director.loadScene('home');
    }

    nextCar() {
        const pos = this.listCar.getPosition();
        if (pos.x <= -90) return;
        pos.x -= 33;
        tween(this.listCar).to(1, { position: pos }).start();

        this.currentCarID++;
        if (data.cars[this.currentCarID].isBought) this.buttonBuy.node.active = false;
        else this.buttonBuy.node.active = true;
        console.log(data.cars[this.currentCarID]);
    }
    previousCar() {
        const pos = this.listCar.getPosition();
        if (pos.x >= 0) return;
        pos.x += 33;
        tween(this.listCar).to(1, { position: pos }).start();

        this.currentCarID--;
        if (data.cars[this.currentCarID].isBought) this.buttonBuy.node.active = false;
        else this.buttonBuy.node.active = true;
        console.log(data.cars[this.currentCarID]);
    }
    buy() {
        data.cars[this.currentCarID].isBought = true;
        this.buttonBuy.node.active = false;
        data.currentCarID = this.currentCarID;
    }
}


