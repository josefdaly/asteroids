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
      20
    );
    this.ship = this.game.addShip();
    this.ctx = canvasEl.getContext("2d");
    canvasEl.addEventListener("mousedown", this.fire.bind(this));
    this.bindKeyHandlers()
    this.ctx.font = "30px Arial";
    this.ctx.fillText("Space to Start",300,240);
    var that = this
    key('space', function () { that.gameLoop(that.ctx) } )
  };

  GameView.prototype.gameLoop = function() {
    key.unbind('space');
    var intervalId = window.setInterval((function () {
      if ($('#sheild').attr('value') < 0) {
        window.clearInterval(intervalId)
        $('#sheild').html('COMPROMISED')
        key('space', function () {this.reset()}.bind(this));
      }
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this), 20);
  }

  GameView.prototype.reset = function () {
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

    key('w', function () {
      ship.power([0, -1], 'up');
    });
    key('a', function () {
      ship.power([-1, 0], 'left');
    });
    key('s', function () {
      ship.power([0, 1], 'down');
    });
    key('d', function () {
      ship.power([1, 0], 'right');
    });
  }

})();
