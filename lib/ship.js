(function () {
  window.Asteroids = window.Asteroids || {};
  var COLOR = "red";
  var RADIUS = 200;


  var Ship = Asteroids.Ship = function (params) {
    Asteroids.MovingObject.call(this, params);
    this.color = COLOR;
    this.radius = RADIUS;
    this.vel = [0,0];
  }

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

})();
