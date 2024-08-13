import { EventKeyboard, EventMouse, EventTouch, Input, input, KeyCode } from "cc";
import { InputKey } from "../enum";
import { GameManager } from "./gameManager";
import { UIManager } from "./uiManager";

export class HandleInput {
    distance: number;
    constructor() {
        this.distance = UIManager.instance.transform.width / 2;
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_PRESSING, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_END, this.onKeyUp, this);
        input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
        input.on(Input.EventType.MOUSE_UP, this.onKeyUp, this);
    }

    onKeyDown(event: EventKeyboard) {
        if (event.keyCode == KeyCode.ARROW_RIGHT || event.keyCode == KeyCode.KEY_D) {
            GameManager.instance.inputKey = InputKey.Press_Right;
            // GameManager.instance.targetTilt = -GameManager.instance.maxTilt;
        }
        else if (event.keyCode == KeyCode.ARROW_LEFT || event.keyCode == KeyCode.KEY_A) {
            GameManager.instance.inputKey = InputKey.Press_Left;
            // GameManager.instance.targetTilt = GameManager.instance.maxTilt;
        }
        GameManager.instance.calculateTilt();
    }
    onKeyUp() {
        GameManager.instance.inputKey = InputKey.Key_Up;
        // GameManager.instance.targetTilt = 0;
        GameManager.instance.calculateTilt();
    }

    onTouchStart(event: EventTouch) {
        if (event.getUILocation().x - this.distance > 0) {
            GameManager.instance.inputKey = InputKey.Press_Right;
        }
        else GameManager.instance.inputKey = InputKey.Press_Left;
        GameManager.instance.calculateTilt();
    }

    onMouseDown(event: EventMouse) {
        if (event.getButton() == EventMouse.BUTTON_RIGHT) {
            GameManager.instance.inputKey = InputKey.Press_Right;
        }
        else if (event.getButton() == EventMouse.BUTTON_LEFT) {
            GameManager.instance.inputKey = InputKey.Press_Left;
        }
        GameManager.instance.calculateTilt();
    }
}