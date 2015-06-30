(function () {
  window.Asteroids = window.Asteroids || {};

  var Bullet = Asteroids.Bullet = function (params) {
    params.radius = Bullet.RADIUS;

    Asteroids.MovingObject.call(this, params);
  };

  Bullet.RADIUS = 2;

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.isWrappable = false;

  Bullet.prototype.collideWith = function(other) {
    if (other.designation != 'ship') {
      // other.burst;
      console.log('hit')
      // this.remove();
    }
  }
})();
