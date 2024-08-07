import { _decorator, BoxCollider, CCFloat, Component, EventKeyboard, game, Input, input, ITriggerEvent, KeyCode, Node } from 'cc';
import { InputKey, Layer } from './enum';
import { Coin } from './element/coin';
import { UIManager } from './control/uiManager';
import { GameManager } from './control/gameManager';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property(Node)
    carAnim: Node;

    @property(BoxCollider)
    collider: BoxCollider;

    @property(CCFloat)
    blinkDuration: number = 0.1;

    @property(CCFloat)
    blinkTimes: number = 5;

    coin: number = 0;
    isBlinking: boolean = false;
    // originalVisibility: boolean = true;

    start() {
        this.collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }

    onTriggerEnter(event: ITriggerEvent) {
        const otherLayer = event.otherCollider.node.layer;
        if (otherLayer == Layer.Coin) {
            const coin = event.otherCollider.node.getComponent(Coin).release();
            this.coin++;
            UIManager.instance.coinAmount.string = this.coin.toString();
        }
        else if (otherLayer == Layer.Gas) {
            event.otherCollider.node.active = false;
            GameManager.instance.map.refuel();
        }
        else if (otherLayer == Layer.Obstacle) {
            GameManager.instance.hitObstacle();
        }
        else if (otherLayer == Layer.Shield) {
            event.otherCollider.node.active = false;
            GameManager.instance.onShield();
        }
    }

    steer(angle: number, deviation: number) {
        this.node.setRotationFromEuler(0, angle, 0);
        const pos = this.node.getPosition();
        pos.x += deviation;
        if (pos.x <= -29 || pos.x >= 29) return;
        this.node.setPosition(pos);
    }

    public blink() {
        if (this.isBlinking) return;

        this.isBlinking = true;
        let blinkCount = 0;

        const blinkInterval = setInterval(() => {
            this.node.active = !this.node.active;
            blinkCount++;

            if (blinkCount >= this.blinkTimes * 2) {
                clearInterval(blinkInterval);
                this.node.active = true;
                this.isBlinking = false;
            }
        }, this.blinkDuration * 1000);
    }
}


