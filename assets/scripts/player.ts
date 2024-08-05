import { _decorator, BoxCollider, CCFloat, Component, EventKeyboard, game, Input, input, KeyCode, Node } from 'cc';
import { InputKey } from './enum';
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

    steer(angle: number, deviation: number) {
        // direction = Math sign (vec2.dot(velocity, getRelativeVector(Vector2.up)))
        // rotation += steeringAmount * steeringPower * velocity * direction
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


