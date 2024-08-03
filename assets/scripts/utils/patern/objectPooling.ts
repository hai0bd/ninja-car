export class ObjectPooling<T>{
    private pool: T[] = [];
    createFunc: () => T;
    resetFunc: (obj: T) => void;

    constructor(createFunc: () => T, resetFunc: (obj: T) => void){
        createFunc = this.createFunc;
        resetFunc = this.resetFunc;
    }

    public acquire(): T{
        if(this.pool.length > 0){
            return this.pool.pop()!;
        }else {
            return this.createFunc();
        }
    }

    public release(obj: T){
        this.resetFunc(obj);
        this.pool.push(obj);
    }
}