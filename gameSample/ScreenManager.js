/**
 * Created by Nick on 21/7/2015.
 */




var ScreenManager = (function () {

    var canvas,
        ctx,
        ScreenManager = {},
        currentScreen,
        delta = Date.now();

    function setGetCanvas()
    {
        canvas = document.getElementById('gameCanvas');
        ctx = canvas.getContext('2d');
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (function () {
            return window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
                    window.setTimeout(callback, 1000 / 60);
                }
        })();
    }

    ScreenManager.init = function () {
        this.w = 640;
        this.h = 480;
        currentScreen = GameScreen;
        currentScreen.init(this.w, this.h);
        currentScreen.loadGraphics();

        setGetCanvas();
        return this;
    };

    ScreenManager.update = function () {

        currentScreen.update();

        ScreenManager.render(ctx);

        window.requestAnimationFrame(ScreenManager.update);
    };

    ScreenManager.render = function (ctx) {
        currentScreen.render(ctx);
    };

    ScreenManager.changeToScreen = function (Screen) {
        currentScreen = Screen;
    };

    return ScreenManager;
}());

