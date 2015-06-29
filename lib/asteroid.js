(function () {
  window.Asteroids = window.Asteroids || {};
  var COLOR = "#00FF00";

  var Asteroid = Asteroids.Asteroid = function (params) {
    Asteroids.MovingObject.call(this, params);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.burst = function() {
    this.remove();
    if (this.radius > 2) {
      for (var i = 0; i < Math.floor(this.radius / 3); i++) {
        this.game.asteroids.push(new Asteroids.Asteroid({
          pos: this.pos,
          vel: randVel,
          game: this,
          radius: Math.floor(this.radius / 2)
        }));
      }
    }
  }

})();
