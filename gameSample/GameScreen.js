/**
 * Created by Nick on 21/7/2015.
 */


var GameScreen = (function(parent)
{
    var GameScreen = {},
        player = Object.create(Player).init(100, 100, 100, 100),
        inputHandler = Object.create(InputHandler).init();

    GameScreen.loadGraphics = function()
    {
        console.log('loading graphics of the GameScreen');
    };

    GameScreen.init = function(w, h)
    {
        //console.log('initing GameScreen');
        parent.init.call(this, w, h);
        return this;
    };

    GameScreen.update = function()
    {
        var moves = inputHandler.handleKeyboardInput();
        player.update(moves);

        //console.log('initing GameScreen');
        parent.update.call(this);
    };

    GameScreen.render = function(ctx)
    {
        ctx.clearRect(0, 0, 500, 500);
        ctx.fillRect(player.x, player.y, player.w, player.h);
        ctx.stroke();
    };


    return GameScreen;
})(Screen);