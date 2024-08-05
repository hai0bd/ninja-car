import { instantiate, Node, Prefab, random, Vec3 } from "cc";
import { CoinGroup, CoinType } from "../enum";
import { randomChoice } from "../utils/utils";
import { config } from "../utils/config";

export class GenerateCoin {
    coins: Node;
    listCoin: Node[] = [];
    minePos: Vec3[] = [];
    prefab: Prefab;
    testNull: Prefab;
    posX: number = 0;
    posZ: number = -100;
    distance: number = 0;
    currentCoinGroup: CoinGroup = CoinGroup.Null;

    constructor(prefab: Prefab, testNull: Prefab, coinParent: Node) {
        this.prefab = prefab;
        this.testNull = testNull;
        this.coins = coinParent;
        this.posZ = config.startGenPoint;
        this.distance = config.coin.distance;
    }

    generateCoin(cointType: CoinType) {
        if (cointType == CoinType.Null || cointType == CoinType.Zikzak) {
            for (let i = 0; i < 5; i++) {
                this.coinNull();
            }
        }
        /* else if (cointType == CoinType.Zikzak) {
            this.coinZikZak();
        } */
        else if (cointType == CoinType.Straight) {
            for (let i = 0; i < 5; i++) {
                this.coinStraight();
            }
        }
        else if (cointType == CoinType.Mix) {
            for (let i = 0; i < 5; i++) {
                const mixType = randomChoice(4, CoinGroup.Null, CoinGroup.Straight, CoinGroup.Left, CoinGroup.Right);

                if (mixType == CoinGroup.Null) this.coinNull();
                else if (mixType == CoinGroup.Straight) this.coinStraight();
                else if (mixType == CoinGroup.Right) this.coinRight();
                else if (mixType == CoinGroup.Left) this.coinLeft();
            }
        }
    }

    coinNull() {
        const listCoin = [];
        let isOverride = false;

        this.posX = randomChoice(3, 25, 0, -25);

        let rand = Math.floor(Math.random() * 2);
        if (this.currentCoinGroup == CoinGroup.Straight || this.currentCoinGroup == CoinGroup.Override) rand = 1;

        for (let i = 0; i < 3; i++) {
            if (rand == 0) {
                if (this.posX == 0 && (this.posZ == this.distance / 2 || this.posZ == -this.distance / 2)) {
                    isOverride = true;
                }

                const test = instantiate(this.testNull);
                test.setPosition(new Vec3(this.posX, test.position.y, this.posZ));
                this.coins.addChild(test);
                listCoin.push(test);
            }
            this.posZ += this.distance;
        }
        if (isOverride) {
            this.destroyList(listCoin);
            this.currentCoinGroup = CoinGroup.Override;
            return;
        }
        this.currentCoinGroup = CoinGroup.Null;
    }

    coinStraight() {
        const listCoin: Node[] = [];
        let isOverride = false;

        this.posX = randomChoice(3, 25, 0, -25);
        for (let i = 0; i < 3; i++) {
            if (this.posX == 0 && (this.posZ == 10 || this.posZ == -10)) isOverride = true;
            const coin = this.instantiateCoin("coinStraight");
            this.posZ += this.distance;
            listCoin.push(coin);
        }
        if (isOverride) {
            this.destroyList(listCoin);
            this.currentCoinGroup = CoinGroup.Override;
            return;
        }
        this.currentCoinGroup = CoinGroup.Straight;
    }

    coinLeft() {
        if (this.posX == 25) {
            this.coinRight();
            return;
        }

        const listCoin = [];
        let isOverride = false;

        if (this.currentCoinGroup == CoinGroup.Right) this.minePos.push(new Vec3(this.posX, 0, this.posZ));
        this.currentCoinGroup = CoinGroup.Left;

        for (let i = 0; i < 3; i++) {
            const coin = this.instantiateCoin("coinLeft");
            if (this.posX == 0 && this.posZ == 0) isOverride = true;
            this.posX += 12.5;
            this.posZ += this.distance;
            listCoin.push(coin)
        }

        this.posX -= 12.5;
        if (isOverride) {
            this.destroyList(listCoin);
            this.currentCoinGroup = CoinGroup.Override;
            return;
        }
    }
    coinRight() {
        if (this.posX == -25) {
            this.coinLeft();
            return;
        }

        const listCoin = [];
        let isOverride = false;

        if (this.currentCoinGroup == CoinGroup.Left) this.minePos.push(new Vec3(this.posX, 0, this.posZ));
        this.currentCoinGroup = CoinGroup.Right;

        for (let i = 0; i < 3; i++) {
            if (this.posX == 0 && this.posZ == 0) isOverride = true;

            const coin = this.instantiateCoin("coinRight");
            this.posX -= 12.5;
            this.posZ += this.distance;
            listCoin.push(coin);
        }

        this.posX += 12.5;
        if (isOverride) {
            this.destroyList(listCoin);
            this.currentCoinGroup = CoinGroup.Override;
            return;
        }
    }

    coinZikZak() {
        let direction = (this.posX / Math.abs(this.posX)); // 1 || -1
        for (let i = 0; i < 15; i++) {
            this.instantiateCoin(`coinZikZak ${direction}`);
            if (Math.abs(this.posX) >= 25) direction = -direction;
            this.posX += 12.5 * direction;
            this.posZ += this.distance;
        }
    }

    instantiateCoin(name: string) {
        const coin = instantiate(this.prefab);
        coin.name = name;
        coin.setPosition(new Vec3(this.posX, coin.position.y, this.posZ));
        this.coins.addChild(coin);
        this.listCoin.push(this.coins);
        return coin;
    }

    destroyList(list: Node[]) {
        for (let i = 0; i < list.length; i++) {
            list[i].destroy();
        }
    }
}