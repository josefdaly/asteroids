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
      var newScore = parseInt($('#score').attr('value'), 10) + Math.floor(other.radius);
      $('#score').attr('value', newScore);
      $('#score').html(newScore);
      other.burst();
    }
  }

  Bullet.prototype.remove = function() {
    var index = this.game.bullets.indexOf(this);
    this.game.bullets.splice(index, 1);
  }
})();
