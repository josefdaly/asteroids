(function () {
  window.Asteroids = window.Asteroids || {};
  var COLOR = "#00FF00";

  var Asteroid = Asteroids.Asteroid = function (params) {
    Asteroids.MovingObject.call(this, params);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.burst = function() {
    this.remove();
    if (this.radius > 15) {
      for (var i = 0; i < 3; i++) {
        var options = {
          pos: [this.pos[0], this.pos[1]],
          radius: Math.floor(this.radius/2)
        }
        this.game.addAsteroids(options);
      }
    }
  }

  Asteroid.prototype.remove = function() {
    var index = this.game.asteroids.indexOf(this);
    this.game.asteroids.splice(index, 1);
  }

})();
