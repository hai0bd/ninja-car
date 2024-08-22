import { _decorator, Button, Component, Node } from 'cc';
import { Language } from '../enum';
const { ccclass, property } = _decorator;

@ccclass('HomePopUp')
export class HomePopUp extends Component {
    @property(Node)
    setting: Node;

    @property(Button)
    btnLanguage: Button;

    @property(Button)
    btnMusic: Button;

    @property(Button)
    exitSetting: Node;

    onClickLanguage() {
        const language = data.language;
        if (language == Language.English) {
            data.language = Language.Vietnam;
        }
        else data.language = Language.English;
    }

    onClickMusic() {
        data.music = !data.music;
    }

    onExit() {
        this.setting.active = false;
    }

}


