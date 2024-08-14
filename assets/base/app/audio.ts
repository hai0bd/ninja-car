import { AudioClip, error, log, resources } from "cc";


declare global {
    var audioUtils: any;
    var sounds: any;
    var musics: any;
}
window.audioUtils = {}
window.sounds = {
    buttonSound: null,
    btnBackSound: null,
    btnSelectSound: null,
};

window.musics = {
    homeMusic: null,
    findMatchMusic: null,
    inGameMusic: null,
    resultMusic: null,
};

audioUtils.volumeNen = 1
audioUtils.volumeSFX = 1

audioUtils.playSound= (name)=>{
    if (!app.setting.isSoundOn) return;

    resources.preload("game/base/sounds/" + name, AudioClip, (err, clip) => {
        if (err) {
            console.error("Failed to load sound:", err);
            return;
        }
        resources.load("game/base/sounds/" + name, AudioClip, (err, clip) => {
            if (err) {
                console.error("Failed to load sound:", err);
                return;
            }
            if (clip) {
                clip.setVolume(audioUtils.volumeSFX)
                clip.play();
            }
        })
    });
}

audioUtils.playAudio= (name)=>{
    if (!app.setting.isSoundOn) return;

    resources.load(name, AudioClip, (err, clip) => {
        if (err) {
            console.error("Failed to load sound:", err);
            return;
        }
        if (clip) {
            clip.setVolume(audioUtils.volumeSFX)
            clip.play();
        }
    });
}

audioUtils.playBackGround= (name)=>{
    if (!app.setting.isSoundOn) return;
    if (musics.homeMusic) {
        musics.homeMusic.stop();
        musics.homeMusic = null;
        // return;
    }
    resources.load(name, AudioClip, (err, clip) => {
        if (err) {
            console.error("Failed to load sound:", err);
            return;
        }
        if (clip) {
            clip.setLoop(true)
            clip.setVolume(audioUtils.volumeNen)
            clip.play();
            musics.homeMusic = clip;
        }
    });
}
export namespace soundUtils {
    export function playHomeMusic() {
        if (!app.setting.isMusicOn) return;
        if (musics.homeMusic) {
            musics.homeMusic.stop();
            musics.homeMusic = null;
            return;
        }
        resources.load("sounds/nhacnen", AudioClip, (err, clip) => {
            if (err) {
                console.error("Failed to load sound:", err);
                return;
            }

            if (clip) {
				console.log('tnq 111')
                musics.homeMusic = clip;
                clip.setLoop(true);
                clip.play();
            }
        });
    }

    export function stopHomeMusic() {
        musics.homeMusic?.stop();
        musics.homeMusic = null;
    }


    export function playSound(name) {
        if (!app.setting.isSoundOn) return;

		resources.load("sounds/" + name, AudioClip, (err, clip) => {
            if (err) {
                console.error("Failed to load sound:", err);
                return;
            }
            if (clip) {
                clip.play();
            }
        });
    }

}
