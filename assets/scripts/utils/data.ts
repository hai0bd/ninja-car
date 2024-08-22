import { director, sys, Vec3 } from "cc";
import { Language } from "../enum";

declare global {
    var data: {
        // currentLevel: number, 
        language: Language,
        music: boolean,
        currentCarID: number,
        cars: carParameter[],
        coin: number,
        bestScore: number;
    }
}

interface carParameter {
    name: string,
    id: number,
    isBought: boolean,
    description: string,
    topSpeed: number; // km/h
    fuel: number; //liter
    acceleration: number // sec
}
/* const initGameData = () => {
    return {
        currentCarID: 0,
        cars: [
            { name: 'xetim', id: 0, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 },
            { name: 'RS01', id: 1, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 },
            { name: 'porche2019', id: 2, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 },
            { name: 'lamborcar', id: 3, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 }
        ],
        coin: 0,
        bestScore: 0
    };
};

const getGameData = () => {
    const storedData = sys.localStorage.getItem('ninja-carData');
    if (storedData) {
        return JSON.parse(storedData);
    }
    else {
        const newData = initGameData();
        sys.localStorage.setItem('ninja-carData', JSON.stringify(newData));
        return newData;
    }
}
window.data = getGameData(); */

window.data = {
    language: Language.Vietnam,
    music: true,
    currentCarID: 0,
    cars: [
        { name: 'xetim', id: 0, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 },
        { name: 'RS01', id: 1, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 },
        { name: 'porche2019', id: 2, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 },
        { name: 'lamborcar', id: 3, isBought: false, description: '', topSpeed: 300, fuel: 1200, acceleration: 4.5 }
    ],
    coin: 0,
    bestScore: 0
}