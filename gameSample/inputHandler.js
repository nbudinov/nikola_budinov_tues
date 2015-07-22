
var InputHandler = (function inputHandler() {
    var inputHandler = {},
        moves = [];

    inputHandler.init = function ()
    {
        return this;
    };

    inputHandler.handleKeyboardInput = function()
    {
        this.moves = [];
        document.addEventListener('keydown', function (event) {
            //debugger;

            if (event.keyCode == 37) {
                moves.push('left');
                //console.log('Left was pressed');
            }
            if (event.keyCode == 39) {
                moves.push('right');
                console.log('in the func ' + moves);
                //console.log('Right was pressed');
            }
        });

        return moves;
    };

    return inputHandler;
})();