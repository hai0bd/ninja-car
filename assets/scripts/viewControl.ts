import { _decorator, Component, instantiate, Node, Prefab, Vec2, Vec3 } from 'cc';
import { randomChoice } from './utils';
import { CoinGroup, CoinType } from './enum';
import { GenerateCoin } from './generateCoin';
const { ccclass, property } = _decorator;

@ccclass('ViewControl')
export class ViewControl extends Component {
    @property(Node)
    roads: Node[] = [];

    @property(Node)
    coins: Node;

    @property(Prefab)
    coinPrefab: Prefab;

    @property(Prefab)
    conePrefab: Prefab;

    @property(Node)
    mines: Node;

    @property(Prefab)
    minePrefab: Prefab;

    // coins: Node[] = [];
    coinPosX: number = 0;
    coinPosZ: number = -120;

    start() {
        const genCoin = new GenerateCoin(this.coinPrefab, this.conePrefab, this.coins, this.coinPosZ);
        // const genMine = ...
        for (let i = 0; i < this.roads.length; i++) {
            const coinType = randomChoice(4, CoinType.Null, CoinType.Straight, CoinType.Mix, CoinType.Zikzak);
            if (coinType == CoinType.Null) this.roads[i].name = "RoadNull";
            genCoin.generateCoin(coinType);
        }
        console.log("coin length: ", genCoin.listCoin.length);

        const listMine = genCoin.minePos;
        for (let i = 0; i < listMine.length; i++) {
            if (listMine[i].x == 25) {
                const mine = instantiate(this.minePrefab);
                mine.setPosition(new Vec3(0, mine.position.y, listMine[i].z));
                this.mines.addChild(mine);
            }
            else if (listMine[i].x == 0) {
                const mine = instantiate(this.minePrefab);
                mine.setPosition(new Vec3(-25, mine.position.y, listMine[i].z));
                this.mines.addChild(mine);
            }
            else if (listMine[i].x == -25) {
                const mine = instantiate(this.minePrefab);
                mine.setPosition(new Vec3(0, mine.position.y, listMine[i].z));
                this.mines.addChild(mine);
            }
        }
    }
}


