import { instantiate, Node, Prefab, Vec3 } from "cc";
import { config } from "../utils/config";
import { randomChoice } from "../utils/utils";
import { ObstacleType } from "../enum";
import { generateElements } from "./generateElements";

export class GenerateObstacle extends generateElements {
    listPoint: Vec3[] = [];
    listObstacle: Node[] = [];

    obstacleType: ObstacleType = ObstacleType.Null;

    posX: number = 0;
    distance: number = 0

    constructor(prefab: Prefab, parent: Node, listPoint: Vec3[]) {
        super(prefab, parent);
        this.listPoint = listPoint;

        this.genObstacle();
    }

    genObstacle() {
        for (let i = 0; i < this.listPoint.length; i++) {
            if (i % 3 == 0) {
                this.randomObstacle(i);
            }
            if (this.obstacleType == ObstacleType.Null) continue;

            const posZ = this.listPoint[i].z;
            if (this.checkOverride(posZ)) continue;

            this.instantiateObstacle(new Vec3(this.posX, 0, posZ));
        }
        /* for (let i = 0; i < this.listPoint.length / 3; i++) {
            const rand = Math.floor(Math.random() * 2);
            if (rand == 0) {
                this.genNull();
            }
            else this.genStraight();
        } */
    }

    instantiateObstacle(pos: Vec3) {
        const obstacle = instantiate(this.prefab);
        obstacle.setPosition(pos);
        this.parent.addChild(obstacle);
        this.listObstacle.push(obstacle);
    }

    randomObstacle(i: number) {
        const rand = Math.floor(Math.random() * 2);
        if (rand == 0) this.obstacleType = ObstacleType.Null;
        else this.obstacleType = ObstacleType.Straight;

        if (this.listPoint[i].x = -1) this.posX = randomChoice(3, 25, 0, -25);
    }

    clearObstacle() {
        this.listObstacle.forEach(node => {
            node.destroy();
        })
    }
}