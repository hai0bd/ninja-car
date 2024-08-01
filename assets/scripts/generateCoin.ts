import { instantiate, Node, Prefab, Vec3 } from "cc";
import { CoinGroup, CoinType } from "./enum";
import { randomChoice } from "./utils";
import { ViewControl } from "./viewControl";
import { FloatingCoin } from "./floatingCoin";

export class GenerateCoin {
    prefab: Prefab;
    testNull: Prefab;
    coins: Node;
    posX: number = 0;
    posZ: number = -129;
    currentCoinGroup: CoinGroup = CoinGroup.Null;
    minePos: Vec3[] = [];

    listCoin: Node[] = [];

    constructor(prefab: Prefab, testNull: Prefab, coinParent: Node, posZ: number) {
        this.prefab = prefab;
        this.testNull = testNull;
        this.coins = coinParent;
        this.posZ = posZ;
    }

    generateCoin(cointType: CoinType) {
        if (this.posZ > 1050) console.log("is too far");
        if (cointType == CoinType.Null) {
            for (let i = 0; i < 5; i++) {
                this.coinNull();
            }
        }
        if (cointType == CoinType.Straight) {
            for (let i = 0; i < 5; i++) {
                this.coinStraight();
            }
        }
        else if (cointType == CoinType.Mix) {
            for (let i = 0; i < 5; i++) {
                const mixType = randomChoice(4, CoinGroup.Null, CoinGroup.Straight, CoinGroup.Left, CoinGroup.Right);
                switch (mixType) {
                    case CoinGroup.Null: this.coinNull();
                    case CoinGroup.Straight: this.coinStraight();
                    case CoinGroup.Left: this.coinLeft();
                    case CoinGroup.Right: this.coinRight()
                }
            }
        }
        else return;
    }

    coinStraight() {
        this.posX = randomChoice(3, -25, 0, -25);
        for (let i = 0; i < 3; i++) {
            this.instantiateCoin("coinStraight");
            this.posZ += 18.5;
        }
        this.currentCoinGroup = CoinGroup.Straight;
    }

    coinLeft() {
        if (this.posX == 25) this.coinRight();
        if (this.currentCoinGroup == CoinGroup.Right) {
            console.log("currentCoinGroup = right");
            this.minePos.push(new Vec3(this.posX, 0, this.posZ));
        }
        this.currentCoinGroup == CoinGroup.Left;
        for (let i = 0; i < 3; i++) {
            this.instantiateCoin("coinLeft");
            this.posX += 12.5;
            this.posZ += 18.5;
        }
        this.posX -= 12.5;
    }
    coinRight() {
        if (this.posX == -25) this.coinLeft();
        if (this.currentCoinGroup == CoinGroup.Left) {
            console.log("currentCoinGroup = left");
            this.minePos.push(new Vec3(this.posX, 0, this.posZ));
        }
        this.currentCoinGroup = CoinGroup.Right;
        for (let i = 0; i < 3; i++) {
            this.instantiateCoin("coinRight");
            this.posX -= 12.5;
            this.posZ += 18.5;
        }
        this.posX += 12.5;
    }

    coinNull() {
        this.posX = randomChoice(3, -25, 0, -25);
        for (let i = 0; i < 3; i++) {
            const test = instantiate(this.testNull);
            test.setPosition(new Vec3(this.posX, test.position.y, this.posZ));
            test.name = "nullCoin";
            this.coins.addChild(test);
            this.posZ += 18.5;
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