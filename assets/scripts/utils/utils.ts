export function randomChoice(amount: number, a: number, b: number, c: number, d?: number) {
    const randomIndex = Math.floor(Math.random() * amount);
    switch (randomIndex) {
        case 0: return a;
        case 1: return b;
        case 2: return c;
        case 3: return d;
    }
    return a;
}

export function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
}