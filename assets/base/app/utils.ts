import { director, instantiate, js, JsonAsset, Label, native, Node, Prefab, resources, sys, tween, UIOpacity, Vec3 } from "cc";
import { NotifyPU } from "../popups/popup-notify";

var md5 = (function () {
    var MD5 = function (d) {
        return M(V(Y(X(d), 8 * d.length)))
    }
    function M(d) {
        for (var _, m = '0123456789abcdef', f = '', r = 0; r < d.length; r++) {
            _ = d.charCodeAt(r)
            f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _)
        }
        return f
    }
    function X(d) {
        for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) {
            _[m] = 0
        }
        for (m = 0; m < 8 * d.length; m += 8) {
            _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32
        }
        return _
    }
    function V(d) {
        for (var _ = '', m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255)
        return _
    }
    function Y(d, _) {
        d[_ >> 5] |= 128 << _ % 32
        d[14 + (_ + 64 >>> 9 << 4)] = _
        for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
            var h = m
            var t = f
            var g = r
            var e = i
            f = md5ii(f = md5ii(f = md5ii(f = md5ii(f = md5hh(f = md5hh(f = md5hh(f = md5hh(f = md5gg(f = md5gg(f = md5gg(f = md5gg(f = md5ff(f = md5ff(f = md5ff(f = md5ff(f, r = md5ff(r, i = md5ff(i, m = md5ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5ff(r, i = md5ff(i, m = md5ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5ff(r, i = md5ff(i, m = md5ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5ff(r, i = md5ff(i, m = md5ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5gg(r, i = md5gg(i, m = md5gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5gg(r, i = md5gg(i, m = md5gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5gg(r, i = md5gg(i, m = md5gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5gg(r, i = md5gg(i, m = md5gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5hh(r, i = md5hh(i, m = md5hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5hh(r, i = md5hh(i, m = md5hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5hh(r, i = md5hh(i, m = md5hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5hh(r, i = md5hh(i, m = md5hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5ii(r, i = md5ii(i, m = md5ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5ii(r, i = md5ii(i, m = md5ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5ii(r, i = md5ii(i, m = md5ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5ii(r, i = md5ii(i, m = md5ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551)
            m = safeadd(m, h)
            f = safeadd(f, t)
            r = safeadd(r, g)
            i = safeadd(i, e)
        }
        return [m, f, r, i]
    }
    function md5cmn(d, _, m, f, r, i) {
        return safeadd(bitrol(safeadd(safeadd(_, d), safeadd(f, i)), r), m)
    }
    function md5ff(d, _, m, f, r, i, n) {
        return md5cmn(_ & m | ~_ & f, d, _, r, i, n)
    }
    function md5gg(d, _, m, f, r, i, n) {
        return md5cmn(_ & f | m & ~f, d, _, r, i, n)
    }
    function md5hh(d, _, m, f, r, i, n) {
        return md5cmn(_ ^ m ^ f, d, _, r, i, n)
    }
    function md5ii(d, _, m, f, r, i, n) {
        return md5cmn(m ^ (_ | ~f), d, _, r, i, n)
    }
    function safeadd(d, _) {
        var m = (65535 & d) + (65535 & _)
        return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
    }
    function bitrol(d, _) {
        return d << _ | d >>> 32 - _
    }
    function MD5Unicode(buffer) {
        if (!(buffer instanceof Uint8Array)) {
            buffer = new TextEncoder().encode(typeof buffer === 'string' ? buffer : JSON.stringify(buffer));
        }
        var binary = [];
        var bytes = new Uint8Array(buffer);
        for (var i = 0, il = bytes.byteLength; i < il; i++) {
            binary.push(String.fromCharCode(bytes[i]));
        }
        return MD5(binary.join(''));
    }

    return MD5Unicode;
})();

declare global {

    var utils: any

}
window.utils = {};


utils.log = console.log

utils.vec3 = function (x, y) {
    return new Vec3(x, y, 0)
}

utils.scaleVec3 = function (scale) {
    return new Vec3(scale, scale, scale)
}


utils.formatMoney = (money) => {
    money = Number(money);
    if (!js.isNumber(money)) return "";

    let sign = ''
    if (money < 0) {
        sign = '-'
        money = -money
    }


    var strValue = money.toString();
    var pos = strValue.length - 3;
    while (pos > 0) {
        strValue = [strValue.slice(0, pos), ".", strValue.slice(pos)].join(
            ""
        );
        pos -= 3;
    }
    return sign + strValue;
}

utils.formatMoneyK = (num) => {
    // if (!pad) pad = 0;
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "K");
    }

    return num;
}



utils.signHash = (input) => {
    var key = "3DsGqAndp32mErJjzflz6Uvz0ni1HYuP";
    return md5(input + key);
}

utils.changeLanguage = (code) => {
    const w = window as any
    w._languageData.init(code);
    w._languageData.updateSceneRenderers()
}

// UI
utils.addLoading = () => {
    // const name = 'Loading' + Math.floor(Math.random() * 1000000);
    resources.load('popups/loading', (err, asset) => {
        var newLayer = instantiate(asset as Prefab);
        newLayer.name = 'Loading'
        const canvas = director.getScene().getChildByName("Canvas");
        canvas.addChild(newLayer);
    });

    // return name
}

utils.removeLoading = (name) => {
    const loading = director.getScene().getChildByName("Canvas").getChildByName('Loading')
    loading?.getComponent(Loading).touchBtnClose()
}


utils.toast = function (message) {
    resources.load('/objects/toast', (err, asset) => {
        var nodeLoading = instantiate(asset as Prefab);
        director.getScene().getChildByName("Canvas").addChild(nodeLoading);
        nodeLoading.position = app.vec3(0, 0)
        nodeLoading.getChildByName('text').getComponent(Label).string = message || ''
        setTimeout(() => {
            nodeLoading.destroy()
        }, 5000)
    });
};

utils.dialogNotify = (message) => {
    var newLayer = instantiate(ref.instance.popupnotify);
    newLayer.name = name;
    const canvas = director.getScene().getChildByName("Canvas");
    canvas.addChild(newLayer);
    newLayer.getComponent(NotifyPU).setMessage(message)
}

utils.dialogAsk = (message, cbConfirm) => {
    const name = 'popup' + Math.round(Math.random() * 1000000);
    resources.load('popups/' + 'NotifyPU', (err, asset) => {
        var newLayer = instantiate(asset as Prefab);
        newLayer.name = name;
        const canvas = director.getScene().getChildByName("Canvas");
        canvas.addChild(newLayer);
        newLayer.getComponent(NotifyPU).setMessage(message, true, cbConfirm)
    });

    return name;
}

utils.getOnlyNumberInString = (t) => {
    var e = t.match(/\d+/g);
    return e ? e.join("") : ""
}

utils.numberWithCommas = (number) => {
    if (number) {
        var result = (number = parseInt(number)).toString().split(".");
        return result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."),
            result.join(".")
    }
    return "0"
}

utils.getStringDateByTime = (t) => {
    var e = new Date(t),
        i = e.getHours(),
        o = e.getMinutes(),
        n = e.getDate(),
        s = e.getMonth() + 1;
    var
        i1 = i < 10 ? "0" + i : i,
        o1 = o < 10 ? "0" + o : o,
        n1 = n < 10 ? "0" + n : n,
        s1 = s < 10 ? "0" + s : s;
    return i1 + ":" + o1 + " " + n1 + "/" + s1 + "/" + e.getFullYear();
}

utils.numberTo = (obj, start, end, duration, currency = false) => {
    clearInterval(obj.timer);
    var range = end - start;
    var minTimer = 50;
    var stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    var startTime = new Date().getTime();
    var endTime = startTime + duration;

    obj.timer = setInterval(function () {
        if (!!obj.node) {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = (end - (remaining * range)) >> 0;
            obj.string = currency ? utils.numberWithCommas(value) : value;
            if (value == end) {
                clearInterval(obj.timer);
            }
        } else clearInterval(obj.timer);
    }, stepTime);
}

utils.loadPopup = (filePath: string, parent: Node, cbPre, cbNext) => {
    let nodeLoad = null
    resources.preload(filePath, Prefab,
        (completedCount, totalCount, item) => {
            let progress = Math.floor((completedCount / totalCount) * 100);
            console.log(`Preloading progress: ${progress}%`);
            cbPre?.(progress)
        },
        (err, prefab) => {
            if (err) {
                console.error("Failed to load prefab:", err);
                return;
            }
            resources.load(filePath, Prefab, (err, prefab) => {
                if (err) {
                    console.error("Failed to load prefab:", err);
                    return;
                }
                // Instantiate prefab và thêm vào parent node
                const newNode = instantiate(prefab);
                newNode.parent = parent
                nodeLoad = newNode
                console.log("Prefab loaded and instantiated successfully");
                if (!err) cbNext?.(nodeLoad);
            })
        }
    );
}

utils.loadJsonFile = (filePath, cb) => {
    resources.load(filePath, JsonAsset, (err, jsonAsset) => {
        if (err) {
            console.error(err);
            return;
        }
        const jsonData = jsonAsset.json;
        if (!err) cb?.(jsonData);
        // Thực hiện các thao tác với jsonData tại đây
    });
}

utils.loadNodeByTime = (filePath: string, parent: Node, time: number) => {
    resources.load(filePath, Prefab, (err, prefab) => {
        if (err) {
            console.error("Failed to load prefab:", err);
            return;
        }

        // Instantiate prefab và thêm vào parent node
        const newNode = instantiate(prefab);
        newNode.parent = parent
        setTimeout(() => {
            newNode.destroy()
        }, time * 1000)
        console.log("Prefab loaded and instantiated successfully");
    });
}
