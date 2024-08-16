import { _decorator, Component, instantiate, Node, Prefab, Vec2, Vec3 } from 'cc';
import { randomChoice } from '../utils/utils';
import { CoinGroup, CoinType } from '../enum';
import { CoinPool, GenerateCoin } from '../element/generateCoin';
import { GenerateObstacle } from '../element/generateObstacle';
import { GameManager } from './gameManager';
const { ccclass, property } = _decorator;

@ccclass('ViewControl')
export class ViewControl extends Component {
    @property(Node)
    roads: Node[] = [];

    @property(Node)
    coinParent: Node;

    @property(Node)
    obstacleParent: Node;

    @property(Node)
    mineParent: Node;

    @property(Node)
    shieldParent: Node;

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
    listPoint: Vec3[] = [];
    listObstacle: Node[] = [];
    coinPool: CoinPool;
    genCoin: GenerateCoin;
    genObstacle: GenerateObstacle;

    /* start() {
        this.init();
    }
 */
    onEnable() {
        // this.clearNode();

        this.genCoin = new GenerateCoin(this.coinPrefab, this.coinParent);

        for (let i = 0; i < this.roads.length; i++) {
            const coinType = randomChoice(4, CoinType.Null, CoinType.Straight, CoinType.Mix, CoinType.Zikzak);
            this.genCoin.generateCoin(coinType);
        }

        this.listPoint = this.genCoin.listObstacle;
        this.genObstacle = new GenerateObstacle(this.conePrefab, this.obstacleParent, this.listPoint);

        this.listObstacle = this.genObstacle.listObstacle;
        // this.listCoin = this.genCoin.listCoin;
        this.genFuel();

        if (GameManager.instance.mapIndex >= 3) {
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
    }

    genFuel() {
        const gas = instantiate(this.gasPump);
        this.node.addChild(gas);
        this.listNode.push(gas);
    }

    genMine(listMine, i) {
        const mine = instantiate(this.minePrefab);
        mine.setPosition(new Vec3(0, mine.position.y, listMine[i].z));
        this.mineParent.addChild(mine);
        this.listNode.push(mine);
    }

    genShield(listMine, i) {
        const shield = instantiate(this.shieldPrefab);
        shield.setPosition(new Vec3(0, shield.position.y, listMine[i].z));
        this.shieldParent.addChild(shield);
        this.listNode.push(shield);
    }

    clearNode() {
        if (this.genCoin) {
            this.genCoin.clearCoin();
        }

        if (this.genObstacle) {
            this.genObstacle.clearObstacle();
        }

        this.listNode.forEach((node) => {
            if (node) {
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


