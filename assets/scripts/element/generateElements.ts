import { Node, Prefab } from "cc";
import { config } from "../utils/config";

export class generateElements {
    prefab: Prefab;
    testNull: Prefab;
    parent: Node;
    distance: number;
    posX: number = 0;
    constructor(prefab: Prefab, parent: Node) {
        // if (!this.coinPools) this.coinPools = new CoinPool(prefab);
        // this.testNull = testNull;
        this.prefab = prefab;
        this.parent = parent;
        this.distance = config.elementDistance;
    }

    checkOverride(posZ: number): boolean {
        if (this.posX == 0) {
            if (posZ >= -30 && posZ <= 30) return true;
        }
        return false;
    }
}