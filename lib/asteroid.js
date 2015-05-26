(function () {
  window.Asteroids = window.Asteroids || {};
  var COLOR = "#00FF00";
  var RADIUS = 15;

  var Asteroid = Asteroids.Asteroid = function (params) {
    Asteroids.MovingObject.call(this, params);
    this.color = COLOR;
    this.radius = RADIUS;
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

})();
