import GameKit from "../engine/gamekit.js";
import MainScene from "./mainscene.js";

new GameKit();

gamekit.setResolution(1920, 1080);

gamekit.preloadAndStartWith(new MainScene());