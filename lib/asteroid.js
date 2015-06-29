(function () {
  window.Asteroids = window.Asteroids || {};
  var COLOR = "#00FF00";

  var Asteroid = Asteroids.Asteroid = function (params) {
    Asteroids.MovingObject.call(this, params);
  }

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

})();
