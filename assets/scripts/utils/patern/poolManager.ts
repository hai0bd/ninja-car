import { ObjectPool } from "./objectPool";

export class PoolManager {
    private static instance: PoolManager;
    private pools: Map<string, ObjectPool<any>> = new Map();

    private constructor() { }

    static getInstance(): PoolManager {
        if (!PoolManager.instance) {
            PoolManager.instance = new PoolManager();
        }
        return PoolManager.instance;
    }

    getPool<T>(key: string, preloadCount: number = 0, createFunc: () => T, resetFunc: (obj: T) => void): ObjectPool<T> {
        if (!this.pools.has(key)) {
            this.pools.set(key, new ObjectPool<T>(createFunc, resetFunc));
            this.pools.get(key).preload(preloadCount);
        }
        return this.pools.get(key) as ObjectPool<T>;
    }

    /* clearPool(key: string) {
        if (this.pools.has(key)) {
            this.pools.get(key)!.clear();
        }
    }

    clearAllPools() {
        this.pools.forEach(pool => pool.clear());
    } */
}