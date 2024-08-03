import { _decorator, Component, instantiate, Node, Prefab, Vec2, Vec3 } from 'cc';
import { randomChoice } from '../utils/utils';
import { CoinGroup, CoinType } from '../enum';
import { GenerateCoin } from '../element/generateCoin';
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

    start() {
        const genCoin = new GenerateCoin(this.coinPrefab, this.conePrefab, this.coins);
        // const genMine = ...
        for (let i = 0; i < this.roads.length; i++) {
            const coinType = randomChoice(4, CoinType.Null, CoinType.Straight, CoinType.Mix, CoinType.Zikzak);
            genCoin.generateCoin(coinType);
        }

        const listMine = genCoin.minePos;
        for (let i = 0; i < listMine.length; i++) {
            if (listMine[i].x == 25) {
                const mine = instantiate(this.minePrefab);
                mine.setPosition(new Vec3(0, mine.position.y, listMine[i].z));
                this.mines.addChild(mine);
                const shield = instantiate(this.shieldPrefab);
                shield.setPosition(new Vec3(-25, shield.position.y, listMine[i].z));
                this.shields.addChild(shield);
            }
            else if (listMine[i].x == 0) {
                const mine = instantiate(this.minePrefab);
                mine.setPosition(new Vec3(-25, mine.position.y, listMine[i].z));
                this.mines.addChild(mine);
                const shield = instantiate(this.shieldPrefab);
                shield.setPosition(new Vec3(0, shield.position.y, listMine[i].z));
                this.shields.addChild(shield);
            }
            else if (listMine[i].x == -25) {
                const mine = instantiate(this.minePrefab);
                mine.setPosition(new Vec3(0, mine.position.y, listMine[i].z));
                this.mines.addChild(mine);
                const shield = instantiate(this.shieldPrefab);
                shield.setPosition(new Vec3(0, shield.position.y, listMine[i].z));
                this.shields.addChild(shield);
            }
        }
    }
}


