(function () {
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function (width, height) {
    this.game = new Asteroids.Game(
      width,
      height,
      30
    );
    this.ship = this.game.addShip();
  }

  GameView.prototype.start = function(canvasEl) {
    var ctx = canvasEl.getContext("2d");
    this.bindKeyHandlers()
    window.setInterval((function () {
      this.game.step();
      this.game.draw(ctx);
    }).bind(this), 20);
  };


  GameView.prototype.bindKeyHandlers = function() {
    var ship = this.ship
    debugger
    key('w', function () { ship.power([0, -1]); });
    key('a', function () { ship.power([-1, 0]); });
    key('s', function () { ship.power([0, 1]); });
    key('d', function () { ship.power([1, 0]); });

    key('space', function () {debugger})
  }

})();
