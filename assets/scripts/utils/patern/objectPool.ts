export class ObjectPool<T> {
    private pool: T[] = [];
    private createFunc: () => T;
    private resetFunc: (obj: T) => void;

    constructor(createFunc: () => T, resetFunc: (obj: T) => void) {
        this.createFunc = createFunc;
        this.resetFunc = resetFunc;
    }

    public acquire(): T {
        if (this.pool.length > 0) {
            return this.pool.pop()!;
        } else {
            return this.createFunc();
        }
    }

    public release(obj: T): void {
        this.resetFunc(obj);
        this.pool.push(obj);
    }
}