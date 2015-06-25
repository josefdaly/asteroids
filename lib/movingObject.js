(function () {
  window.Asteroids = window.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function (params) {
    this.pos = params.pos;
    this.vel = params.vel;
    this.radius = params.radius;
    this.game = params.game;
    this.color = params.color;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos)

  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    x1 = this.pos[0];
    y1 = this.pos[1];
    x2 = otherObject.pos[0];
    y2 = otherObject.pos[1];

    var dist = Math.sqrt( Math.pow((x1- x2), 2) + Math.pow((y1-y2), 2) );
    return dist < (this.radius + otherObject.radius);
  }

  MovingObject.prototype.collidedWith = function (otherObject) {
    this.game.remove(otherObject);
    this.game.remove(this);
  }

})();
