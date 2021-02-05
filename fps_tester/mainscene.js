import Scene from '../engine/scene.js';
import Entity from "../engine/entity.js";
import { TextSprite } from "../engine/sprite.js";

class MainEntity extends Entity {
    constructor() {
        super();

        this.text_banner1 = this.sprite.add(new TextSprite({
            x: 1920/2,
            y: 1080/2,
            text: "FPS:",
            font: "72px Console",
            color: "#fff",
            alignment: "center"
        }));

        this.score = 0;
        this.highscore = 0;
    }
    tick(scene) {
        this.text_banner1.text = "FPS: " + gamekit.fps;
    }
    scoreString() {
        return "Your Score: " + this.score + " - Highscore: " + this.highscore;
    }
}

export default class MainScene extends Scene {
    constructor() {
        super();
        this.add(new MainEntity());
    }
}