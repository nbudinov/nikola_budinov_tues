/**
 * Created by Nick on 21/7/2015.
 */

var Player = (function (parent) {
    var Player = {};

    Player.init = function(x, y, w, h)
    {
        parent.init.call(this, x, y, w, h);

        return this;
    };

    Player.update = function(moves)
    {
        //console.log(moves);
        moves.forEach(function(currentVal, ind, moves) {
            console.log(currentVal + ind);
        });
        //this.x += 1;
    };

    return Player;
})(GameObject);