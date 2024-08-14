import {_decorator, Component, Node, Tween, tween, UIOpacity, Vec3} from "cc";

const {ccclass, property} = _decorator;

const DURATION = 0.8;
const DURATION_HIDE = 0.5;

const easingIn = {
    easing: "cubicIn",
}

const easingOut = {
    easing: "cubicOut",
}

@ccclass("BasePopUp")
export class BasePopUp extends Component {
    @property({
        type: Node,
    })
    content: Node | null = null;

    @property({
        type: Node,
    })
    background: Node | null = null;

    backgroundUIOpacity: UIOpacity = null;
    isHide = false;

    start() {
        if (!this.background.getComponent(UIOpacity))
            this.background.addComponent(UIOpacity)
        this.backgroundUIOpacity = this.background.getComponent(UIOpacity);
        this.backgroundUIOpacity.opacity = 100;


        this.show();
    }

    // protected onEnable(): void {
    //     this.show()
    // }

    show() {
        tween(this.backgroundUIOpacity).to(DURATION/2, {opacity: 255}, {
            // easing: "bounceOut",
        }).start();
        if (this.content) {
            this.content.addComponent(UIOpacity);
            this.content.getComponent(UIOpacity).opacity = 100;
            this.content.setScale(app.scaleVec3(0.8));
        }
        if (this.content) {
            tween(this.content.getComponent(UIOpacity))
                .to(0.2, {opacity: 255}, {

                })
                .start();
            tween(this.content)
                .to(
                    DURATION,
                    { scale: new Vec3(1, 1, 1) },
                    {
                        easing: (k) => {

                            var s, a = 1.5, p = 0.45;
                            if (k === 0) {
                                return 0;
                            }
                            if (k === 1) {
                                return 1;
                            }
                            if (!a || a < 1) {
                                a = 1;
                                s = p / 4;
                            }
                            else {
                                s = p * Math.asin(1 / a) / (2 * Math.PI);
                            }
                            return (a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
                        },
                    }
                )
                .start()
        }
    }

    hide() {
        if (this.isHide) return;
        this.isHide = true;
        Tween.stopAllByTarget(this.backgroundUIOpacity);
        tween(this.backgroundUIOpacity).to(DURATION_HIDE, {opacity: 0}).call(() => {
            console.log("removed");
            this.node.destroy();
        }).start();
        if (this.content) {
            Tween.stopAllByTarget(this.content);
            tween(this.content.getComponent(UIOpacity))
                .to(DURATION_HIDE, {opacity: 100}, {
                    easing: "backIn",
                })
                .start();
            tween(this.content)
                .to(
                    DURATION_HIDE,
                    {scale: new Vec3(0.3, 0.3, 0.3)},
                    {
                        easing: "backIn",
                    }
                )

                .start();
        }
    }

    touchBtnClose() {
        this.hide();
    }
}
