import { director, instantiate, js, Label, native, Node, Prefab, resources, sys, tween, UIOpacity, Vec3 } from "cc";

interface carParameter {
    name: string,
    id: number,
    isBought: boolean,
    description: string,
    topSpeed: number; // km/h
    fuel: number; //liter
    acceleration: number // sec
}
declare global {
    var data: {
        currentCarID: number,
        cars: carParameter[],
        coin: number;
    }
    // var data: any
}

window.data = {
    currentCarID: 0,
    cars: [
        { name: 'xetim', id: 0, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 },
        { name: 'RS01', id: 1, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 },
        { name: 'porche2019', id: 2, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 },
    ],
    coin: 0,
}