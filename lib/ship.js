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
})();
