import { EventKeyboard, EventMouse, EventTouch, Input, input, KeyCode } from "cc";
import { InputKey } from "../enum";
import { GameManager } from "./gameManager";
import { UIManager } from "./uiManager";

export class HandleInput {
    distance: number;
    constructor() {
        this.distance = UIManager.instance.transform.width / 2;
        /* input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_PRESSING, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_END, this.onKeyUp, this); */
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.on(Input.EventType.MOUSE_UP, this.onKeyUp, this);
    }

    onKeyDown(event: EventKeyboard) {
        if (event.keyCode == KeyCode.ARROW_RIGHT || event.keyCode == KeyCode.KEY_D) {
            GameManager.instance.inputKey.keyRight = true;
            // GameManager.instance.targetTilt = -GameManager.instance.maxTilt;
        }
        else if (event.keyCode == KeyCode.ARROW_LEFT || event.keyCode == KeyCode.KEY_A) {
            GameManager.instance.inputKey.keyLeft = true;
            // GameManager.instance.targetTilt = GameManager.instance.maxTilt;
        }
    }
    onKeyUp(event: EventMouse) {
        if (event.getButton() == EventMouse.BUTTON_RIGHT) {
            GameManager.instance.inputKey.keyRight = false;
        }
        else if (event.getButton() == EventMouse.BUTTON_LEFT) {
            GameManager.instance.inputKey.keyLeft = false;
        }
        // GameManager.instance.targetTilt = 0;
    }

    onTouchStart(event: EventTouch) {
        if (event.getUILocation().x - this.distance > 0) {
            GameManager.instance.inputKey.keyRight = true;
        }
        else GameManager.instance.inputKey.keyLeft = true;
    }

    onMouseDown(event: EventMouse) {
        if (event.getButton() == EventMouse.BUTTON_RIGHT) {
            GameManager.instance.inputKey.keyRight = true;
        }
        else if (event.getButton() == EventMouse.BUTTON_LEFT) {
            GameManager.instance.inputKey.keyLeft = true;
        }
    }
}