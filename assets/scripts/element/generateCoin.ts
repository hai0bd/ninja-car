import { instantiate, math, Node, Prefab, random, randomRange, Vec3 } from "cc";
import { Coin } from "./coin";
import { config } from "../utils/config";
import { randomChoice } from "../utils/utils";
import { CoinGroup, CoinType } from "../enum";
import { ObjectPool } from "../utils/patern/objectPool";
import { PoolManager } from "../utils/patern/poolManager";
import { FloatingItem } from "../floatingItem";
import { generateElements } from "./generateElements";

export class GenerateCoin extends generateElements {
    listCoin: Node[] = [];
    listObstacle: Vec3[] = [];
    minePos: Vec3[] = [];
    posZ: number = 0;

    currentCoinGroup: CoinGroup = CoinGroup.Null;
    currentCoinAngle: number = 0;

    coinPools: CoinPool;

    constructor(prefab: Prefab, coinParent: Node) {
        super(prefab, coinParent)
        if (!this.coinPools) this.coinPools = new CoinPool(prefab);
        this.posZ = config.startGenPoint;
    }

    generateCoin(cointType: CoinType) {
        if (cointType == CoinType.Null /* || cointType == CoinType.Zikzak */) {
            for (let i = 0; i < 5; i++) {
                this.coinNull();
            }
        }
        else if (cointType == CoinType.Zikzak) {
            this.coinZikZak();
        }
        else if (cointType == CoinType.Straight) {
            for (let i = 0; i < 5; i++) {
                this.coinStraight();
            }
        }
        else if (cointType == CoinType.Mix) {
            for (let i = 0; i < 5; i++) {
                if (i % 2) {
                    this.coinNull();
                    continue;
                }
                const mixType = randomChoice(4, CoinGroup.Null, CoinGroup.Straight, CoinGroup.Left, CoinGroup.Right);

                if (mixType == CoinGroup.Null) this.coinNull();
                else if (mixType == CoinGroup.Straight) this.coinStraight();
                else if (mixType == CoinGroup.Right) this.coinRight();
                else if (mixType == CoinGroup.Left) this.coinLeft();
            }
        }
    }

    coinNull() {
        for (let i = 0; i < 3; i++) {
            if (this.currentCoinGroup == CoinGroup.Null) this.listObstacle.push(new Vec3(-1, 0, this.posZ));
            this.posZ += this.distance;
        }
        this.currentCoinGroup = CoinGroup.Null;
    }

    coinStraight() {
        if (this.checkOverride(this.posZ) || this.currentCoinGroup == CoinGroup.Null) {
            this.currentCoinGroup = CoinGroup.Straight;
            this.coinNull();
            this.currentCoinGroup = CoinGroup.Override;
            return;
        }

        this.posX = randomChoice(3, -25, 0, 25);
        for (let i = 0; i < 3; i++) {
            const coin = this.instantiateCoin("coinStraight", i);
            this.posZ += this.distance;
        }
        this.currentCoinGroup = CoinGroup.Straight;
    }

    coinLeft() {
        if (this.posX == 25 || this.currentCoinGroup == CoinGroup.Left) {
            this.coinRight();
            return;
        }

        if (this.checkOverride(this.posZ) || this.currentCoinGroup == CoinGroup.Null) {
            this.currentCoinGroup = CoinGroup.Left;
            this.coinNull();
            this.currentCoinGroup = CoinGroup.Override;
            return;
        }

        if (this.currentCoinGroup == CoinGroup.Right) this.minePos.push(new Vec3(this.posX, 0, this.posZ));

        for (let i = 0; i < 3; i++) {
            const coin = this.instantiateCoin("coinLeft", i);
            this.posX += 12.5;
            this.posZ += this.distance;
        }
        this.posX -= 12.5;

        this.currentCoinGroup = CoinGroup.Left;
    }
    coinRight() {
        if (this.posX == -25 || this.currentCoinGroup == CoinGroup.Right) {
            this.coinLeft();
            return;
        }

        if (this.checkOverride(this.posZ) || this.currentCoinGroup == CoinGroup.Null) {
            this.currentCoinGroup = CoinGroup.Straight;
            this.coinNull();
            this.currentCoinGroup = CoinGroup.Override;
            return;
        }

        if (this.currentCoinGroup == CoinGroup.Left) this.minePos.push(new Vec3(this.posX, 0, this.posZ));

        for (let i = 0; i < 3; i++) {
            const coin = this.instantiateCoin("coinRight", i);
            this.posX -= 12.5;
            this.posZ += this.distance;
        }
        this.posX += 12.5;

        this.currentCoinGroup = CoinGroup.Right;
    }

    coinZikZak() {
        this.posZ += this.distance;
        if (this.posX == 0) this.posX = Math.random() < 0.5 ? -25 : 25;
        let direction = (this.posX / Math.abs(this.posX)); // 1 || -1

        for (let i = 0; i < 13; i++) {
            this.instantiateCoin(`coinZikZak ${direction}`, i % 3);
            if (Math.abs(this.posX) >= 25) direction = -direction;
            this.posX += 12.5 * direction;
            this.posZ += this.distance;
        }
        this.posZ += this.distance;
        this.posX -= 12.5 * direction;
    }

    instantiateCoin(name: string, index: number) {
        const coin = instantiate(this.prefab);
        coin.setRotationFromEuler(new Vec3(0, this.currentCoinAngle += 10, 0));
        if (this.currentCoinAngle >= 180) this.currentCoinAngle = 0;
        // const coin = this.coinPools.acquireCoin();
        coin.name = name;
        coin.setPosition(new Vec3(this.posX, coin.position.y, this.posZ));
        this.parent.addChild(coin);
        this.listCoin.push(coin);
        return coin;
    }

    clearCoin() {
        for (let i = 0; i < this.listCoin.length; i++) {
            // this.coinPools.releaseCoin(this.listCoin.pop());
            // console.log(this.listCoin[i].name);
            this.listCoin[i].destroy();
        }
        this.listCoin = [];
        // console.log(this.coinPools.pool.size);
    }

    destroyList(list: Node[]) {
        for (let i = 0; i < list.length; i++) {
            // this.coinPools.releaseCoin(list[i]);
            list[i].active = false;
            // list[i].destroy();
        }
    }
}

export class CoinPool {
    pool: ObjectPool<Node>;

    constructor(coinPrefab: Prefab) {
        this.pool = PoolManager.getInstance().getPool('coin', 90,
            () => {
                const coin = instantiate(coinPrefab);
                const coinFloating = coin.getComponent(FloatingItem);
                const coinComponent = coin.getComponent(Coin);
                if (coinComponent) {
                    coinComponent.setPool(this);
                }
                return coin;
            },
            (coin: Node) => {
                coin.removeFromParent();
                coin.active = false;
            }
        );
        // this.pool.preload(100);
    }

    acquireCoin(): Node {
        const coin = this.pool.acquire();
        coin.active = true;
        return coin;
    }

    releaseCoin(coin: Node) {
        this.pool.release(coin);
        // console.log(this.pool.size);
    }
}