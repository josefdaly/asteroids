(function () {
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function (width, height) {
    this.game = new Asteroids.Game(
      width,
      height,
      30
    );
    this.ship = this.game.addShip();
    debugger
  }

  GameView.prototype.start = function(canvasEl) {
    var ctx = canvasEl.getContext("2d");
    var that = this;
    canvasEl.addEventListener("mousedown", this.fire.bind(this));
    this.bindKeyHandlers()
    window.setInterval((function () {
      this.game.step();
      this.game.draw(ctx);
    }).bind(this), 20);
  };

  GameView.prototype.fire = function (event) {
    var ship = this.ship

    var pos = [event.pageX, event.pageY];
    ship.fireBullet(pos);
  }

  GameView.prototype.bindKeyHandlers = function() {
    var ship = this.ship

    key('w', function () { ship.power([0, -1]); });
    key('a', function () { ship.power([-1, 0]); });
    key('s', function () { ship.power([0, 1]); });
    key('d', function () { ship.power([1, 0]); });

    key('space', function () {debugger}.bind(this))


  }

})();
