(function () {
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function (width, height) {
    this.width = width;
    this.height = height;
  }

  GameView.prototype.start = function(canvasEl) {
    this.game = new Asteroids.Game(
      this.width,
      this.height,
      30
    );
    this.ship = this.game.addShip();
    this.ctx = canvasEl.getContext("2d");
    canvasEl.addEventListener("mousedown", this.fire.bind(this));
    this.bindKeyHandlers()
    this.gameLoop(this.ctx);
  };

  GameView.prototype.gameLoop = function() {
    var intervalId = window.setInterval((function () {
      if ($('#sheild').attr('value') < 0 ||
        this.game.asteroids.length === 0) {
        window.clearInterval(intervalId)
        $('#sheild').html('COMPROMISED')
        key('space', function () {this.reset()}.bind(this));
      }
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this), 20);
  }

  GameView.prototype.reset = function () {
    console.log('hi')
    this.game.reset();
    this.ship = this.game.addShip();
    this.bindKeyHandlers();
    this.gameLoop(this.ctx);
  }

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
  }

})();
