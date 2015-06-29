(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (params) {
    params.radius = Bullet.RADIUS;

    Asteroids.MovingObject.call(this, params);
  };

  Bullet.RADIUS = 2;

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
  
  Bullet.prototype.isWrappable = false;
})
