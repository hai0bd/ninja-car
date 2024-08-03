import { instantiate, Node, Prefab, Vec3 } from "cc";
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

    coinStraight() {
        this.posX = randomChoice(3, 25, 0, -25);
        for (let i = 0; i < 3; i++) {
            this.instantiateCoin("coinStraight");
            this.posZ += this.distance;
        }
        this.currentCoinGroup = CoinGroup.Straight;
    }

    coinLeft() {
        if (this.posX == 25) {
            this.coinRight();
            return;
        }

        if (this.currentCoinGroup == CoinGroup.Right) this.minePos.push(new Vec3(this.posX, 0, this.posZ));
        this.currentCoinGroup = CoinGroup.Left;

        for (let i = 0; i < 3; i++) {
            this.instantiateCoin("coinLeft");
            this.posX += 12.5;
            this.posZ += this.distance;
        }

        this.posX -= 12.5;
    }
    coinRight() {
        if (this.posX == -25) {
            this.coinLeft();
            return;
        }

        if (this.currentCoinGroup == CoinGroup.Left) this.minePos.push(new Vec3(this.posX, 0, this.posZ));
        this.currentCoinGroup = CoinGroup.Right;

        for (let i = 0; i < 3; i++) {
            this.instantiateCoin("coinRight");
            this.posX -= 12.5;
            this.posZ += this.distance;
        }

        this.posX += 12.5;
    }

    coinNull() {
        this.posX = randomChoice(3, 25, 0, -25);
        for (let i = 0; i < 3; i++) {
            const test = instantiate(this.testNull);
            test.setPosition(new Vec3(this.posX, test.position.y, this.posZ));
            this.coins.addChild(test);
            this.posZ += this.distance;
        }
        this.currentCoinGroup = CoinGroup.Null;
    }

    instantiateCoin(name: string) {
        const coin = instantiate(this.prefab);
        coin.name = name;
        coin.setPosition(new Vec3(this.posX, coin.position.y, this.posZ));
        this.coins.addChild(coin);
        this.listCoin.push(this.coins);
    }
}