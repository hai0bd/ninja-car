import {director, instantiate, js, Label, native, Node, Prefab, resources, sys, tween, UIOpacity, Vec3} from "cc";

declare global {
    var app: any
}
window.app = {};

app.user = {

}

app.userData = (data) => {
    if (void 0 !== data.avatar) {
        app.user.avatar = data.avatar;
    }
    if (void 0 !== data.rights) {
        app.user.rights = data.rights;
    }
    if (void 0 !== data.name) {
        app.user.name = data.name;
    }
    if (void 0 !== data.name) {
        app.user.name = data.name;
    }
    if (void 0 !== data.red) {
        app.user.red = data.red;
        console.log(app.user.red + "AAPPPPPPP")
    }
    if (void 0 !== data.ketSat) {
        app.user.ketSat = data.ketSat;
    }
    if (void 0 !== data.UID) {
        app.user.UID = data.UID;
        localStorage.setItem('TH', data.UID);
    }
    if (void 0 !== data.token) {
        localStorage.setItem('HT', data.token);
    }
    if (void 0 !== data.phone) {
        app.user.phone = data.phone;
        app.user.veryphone = !!data.veryphone;
    }
    if (void 0 !== data.joinedOn) {
        app.user.joinedOn = data.joinedOn;
    }
    if (void 0 !== data.security) {
        app.user.security = data.security;
    }

    // Level
    if (void 0 !== data.level) {
        app.user.level = data.level;
    }
    if (void 0 !== data.vipHT) {
        app.user.vipHT = data.vipHT;
    }
    if (void 0 !== data.vipNext) {
        app.user.vipNext = data.vipNext;
    }
    if (void 0 !== data.token) {
        localStorage.setItem('access_token', data.token);
        try {
            // get current IP
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    var ipAndress = xhr.responseText;
                    // post to server device
                    let isBrowser = (sys.isBrowser) ? true : false;
                    ws.send({ user: { update_device: { is_browser: isBrowser, os: sys.os }, ip: ipAndress } });
                }
            };
            xhr.open("GET", "https://api.ipify.org", true);
            xhr.send();
        } catch (e) {}
    }
}

app.setting = {
    isSoundOn: true,
    isMusicOn: true,
    isVibrate: true
}

app.vec3 = function (x, y) {
    return new Vec3(x, y, 0)
}

app.scaleVec3 = function (scale) {
    return new Vec3(scale, scale, scale)
}

app.loadSetting = () => {
    const setting = sys.localStorage.getItem('Setting')
    if (setting) {
        const obj = JSON.parse(setting)
        app.setting = obj
    }
}

app.saveSetting = () => {
    sys.localStorage.setItem('Setting', JSON.stringify(app.setting))
}
app.config = {
    TRANSITION_DURATION: 0.15
}
app.log = console.log

app.EVENT = {
    ON_MESSAGE: 'WSS_ON_MESSAGE'
}



