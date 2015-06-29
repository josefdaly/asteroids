(function () {
  window.Asteroids = window.Asteroids || {};
  var COLOR = "red";
  var RADIUS = 10;


  var Ship = Asteroids.Ship = function (params) {
    debugger
    Asteroids.MovingObject.call(this, params);
    debugger
    this.designation = 'ship';
    this.color = COLOR;
    this.radius = RADIUS;
    this.vel = [0,0];
  }




  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
    if (this.vel[0] > 4 || this.vel[0] < -4 ||
       this.vel[1] > 4 || this.vel[1] < -4 ) {
      this.vel[0] -= impulse[0];
      this.vel[1] -= impulse[1];
    }
  }
})();
