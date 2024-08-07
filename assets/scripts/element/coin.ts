import { _decorator, CCFloat, Component, CylinderCollider, input, ITriggerEvent, Node, tween, Vec3 } from 'cc';
import { GameManager } from '../control/gameManager';
import { CoinPool } from './generateCoin';
const { ccclass, property } = _decorator;

@ccclass('Coin')
export class Coin extends Component {
    private pool: CoinPool | null = null;

    setPool(pool: CoinPool) {
        this.pool = pool;
    }

    release() {
        if (this.pool) {
            this.pool.releaseCoin(this.node);
        } else {
            console.warn('Coin pool not set!');
            this.node.removeFromParent();
        }
    }
}


