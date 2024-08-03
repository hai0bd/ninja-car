import { _decorator, BoxCollider, Component, ICollisionEvent, ITriggerEvent, Node } from 'cc';
import { GameManager } from '../control/gameManager';
import { Obstacle } from './obstacle';
const { ccclass, property } = _decorator;

@ccclass('Landmine')
export class Landmine extends Obstacle {
}


