(function () {
  window.Asteroids = window.Asteroids || {};
  var COLOR = "#00FF00";

  var Asteroid = Asteroids.Asteroid = function (params) {
    Asteroids.MovingObject.call(this, params);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.burst = function() {
    this.remove();
    if (this.radius > 20) {
      for (var i = 0; i < this.radius/5; i++) {
        var that = this;
        var options = {
          pos: that.pos,
          radius: Math.floor(that.radius/2)
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
