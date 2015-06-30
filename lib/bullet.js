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
      this.remove();
      other.burst();
      debugger
      console.log('hit')
      // this.remove();
    }
  }

  Bullet.prototype.remove = function() {
    var index = this.game.bullets.indexOf(this);
    this.game.bullets.splice(index, 1);
  }
})();
