import { _decorator, Component, instantiate, Node, Prefab, Vec2, Vec3 } from 'cc';
import { randomChoice } from '../utils/utils';
import { CoinGroup, CoinType } from '../enum';
import { CoinPool, GenerateCoin } from '../element/generateCoin';
const { ccclass, property } = _decorator;

@ccclass('ViewControl')
export class ViewControl extends Component {
    @property(Node)
    roads: Node[] = [];

    @property(Node)
    coins: Node;

    @property(Node)
    mines: Node;

    @property(Node)
    shields: Node;

    @property(Prefab)
    coinPrefab: Prefab;

    @property(Prefab)
    conePrefab: Prefab;

    @property(Prefab)
    shieldPrefab: Prefab;

    @property(Prefab)
    minePrefab: Prefab;

    @property(Prefab)
    gasPump: Prefab;

    listNode: Node[] = [];
    listCoin: Node[] = [];
    coinPool: CoinPool;
    genCoin: GenerateCoin;

    /* start() {
        this.init();
    }
 */
    onEnable() {
        this.clearNode();

        this.genCoin = new GenerateCoin(this.coinPrefab, this.conePrefab, this.coins);
        // const genMine = ...
        for (let i = 0; i < this.roads.length; i++) {
            const coinType = randomChoice(4, CoinType.Null, CoinType.Straight, CoinType.Mix, CoinType.Zikzak);
            this.genCoin.generateCoin(coinType);
        }

        // this.listNode = this.genCoin.listCoin;
        this.listCoin = this.genCoin.listCoin;
        this.coinPool = this.genCoin.coinPools;
        this.genFuel();

        const listMine = this.genCoin.minePos;
        for (let i = 0; i < listMine.length; i++) {
            if (listMine[i].x == 25) {
                this.genMine(listMine, i);
                this.genShield(listMine, i);
            }
            else if (listMine[i].x == 0) {
                this.genMine(listMine, i);
                this.genShield(listMine, i);
            }
            else if (listMine[i].x == -25) {
                this.genMine(listMine, i);
                this.genShield(listMine, i);
            }
        }
    }

    genFuel() {
        /* const gas = instantiate(this.gasPump);
        this.node.addChild(gas);
        this.listNode.push(gas); */
    }

    genMine(listMine, i) {
        const mine = instantiate(this.minePrefab);
        mine.setPosition(new Vec3(0, mine.position.y, listMine[i].z));
        this.mines.addChild(mine);
        this.listNode.push(mine);
    }

    genShield(listMine, i) {
        const shield = instantiate(this.shieldPrefab);
        shield.setPosition(new Vec3(0, shield.position.y, listMine[i].z));
        this.shields.addChild(shield);
        this.listNode.push(shield);
    }

    clearNode() {
        // console.log(this.listNode.length);
        if (this.genCoin) {
            this.genCoin.clearCoin();
        }

        /* this.listCoin.forEach((coin) => {
            this.coinPool.releaseCoin(coin);
            console.log(coin.name);
        })
        console.log(this.coinPool);
        this.listCoin = []; */

        /* console.log('fist index: ', this.listNode[0]);
        for (let i = 0; i < this.listNode.length; i++) {
            // if (this.listNode[i].name == 'gasPump') console.log('is not destroy?');
            console.log(`${this.listNode[i].name} is destroy`);
            this.listNode[i].removeFromParent();
            this.listNode[i].destroy();
        } */
        this.listNode.forEach((node) => {
            if (node) {
                // if (node.name == 'gasPump') console.log('is not destroy?');
                node.removeFromParent();
                node.destroy();
            }
        })

        this.listNode = [];
    }

    /* resetView() {
        this.clearNode();
        this.init();
    } */
}


