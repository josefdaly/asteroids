(function () {
  window.Asteroids = window.Asteroids || {};
  var COLOR = "red";
  var RADIUS = 10;


  var Ship = Asteroids.Ship = function (params) {
    Asteroids.MovingObject.call(this, params);
    this.designation = 'ship';
    this.color = COLOR;
    this.radius = RADIUS;
    this.vel = [0,0];
  }

  Ship.prototype.power = function (impulse) {
    this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]]
  }


  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
})();
