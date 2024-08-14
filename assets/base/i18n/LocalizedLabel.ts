
import * as i18n from './LanguageData';

import { _decorator, Component, Label } from 'cc';
const { ccclass, property, executeInEditMode } = _decorator;

@ccclass('LocalizedLabel')
@executeInEditMode
export class LocalizedLabel extends Component {
    label: Label | null = null;

    @property({ visible: true })
    key: string = '';

    // @property({ displayName: 'Key', visible: true })
    get _key() {
        return this.key;
    }
    set _key(str: string) {
        this.updateLabel();
        this.key = str;
    }

    onLoad() {
        if (!i18n.ready) {
            i18n.init('vi');
        }
        this.fetchRender();
    }

    fetchRender () {
        let label = this.getComponent('cc.Label') as Label;
        if (label) {
            this.label = label;
            this.updateLabel();
            return;
        } 
    }

    updateLabel () {
        if (!this.key)
        return;
        this.label && (this.label.string = i18n.t(this.key));
    }
}
