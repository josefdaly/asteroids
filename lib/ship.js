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

  Ship.prototype.fireBullet = function(pos) {
    var pos = [pos[0] - 30, pos[1] - 30];
    var relativePos = [(pos[0] - this.pos[0]), (pos[1] - this.pos[1])];
    var vel = Asteroids.Util.scale(relativePos, .025);

    var bullet = new Asteroids.Bullet({
      pos: [this.pos[0],this.pos[1]],
      vel: vel,
      color: this.color,
      game: this.game
    });

    this.game.addBullet(bullet);
  }
})();
