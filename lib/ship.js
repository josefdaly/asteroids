(function () {
  window.Asteroids = window.Asteroids || {};
  var COLOR = "black";
  var RADIUS = 10;


  var Ship = Asteroids.Ship = function (params) {
    debugger
    Asteroids.MovingObject.call(this, params);
    debugger
    this.designation = 'ship';
    this.color = COLOR;
    this.radius = RADIUS;
    this.vel = [0,0];
    this.shootSound = new Audio("sounds/shoot.wav");
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
    this.shootSound.play();

    var bullet = new Asteroids.Bullet({
      pos: [this.pos[0],this.pos[1]],
      vel: vel,
      color: 'red',
      game: this.game
    });

    this.game.addBullet(bullet);
  }

  Ship.prototype.collideWith = function(other) {
    if (other.color === 'yellow') {
      var sheild = parseInt($('#sheild').attr('value'), 10) + Math.floor(other.radius);
      var newScore = parseInt($('#score').attr('value'), 10) + 50;
      $('#score').attr('value', newScore);
      $('#score').html(newScore);
    } else {
      var sheild = $('#sheild').attr('value') - Math.floor(other.radius);
    }
    $('#sheild').attr('value', sheild);
    if (sheild < 0) {
      $('#sheild').html('COMPROMISED')
    } else {
      $('#sheild').html(sheild);
    }
    other.burst();
  }
})();
