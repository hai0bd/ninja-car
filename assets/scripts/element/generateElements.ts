import { Prefab } from "cc";
import { config } from "../utils/config";

export class generateElements{
    prefab: Prefab;
    testNull: Prefab;
    parent: Node;
    distance: number;
    posZ: number;
    constructor(prefab: Prefab, testNull: Prefab, parent: Node) {
        // if (!this.coinPools) this.coinPools = new CoinPool(prefab);
        // this.testNull = testNull;
        this.prefab = prefab;
        this.parent = parent;
        this.posZ = config.startGenPoint;
        this.distance = config.coin.distance;
    }
}