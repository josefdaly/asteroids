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
    if (this.radius < 9) {
      this.color = 'yellow';
      ctx.fill();
    }

    if (this.designation === 'ship') {
      ctx.fill();
      if (this.thrust === 'up') {
        ctx.moveTo(this.pos[0] + 3, this.pos[1] + this.radius);
        ctx.lineTo(this.pos[0], this.pos[1] + this.radius + 8);
        ctx.lineTo(this.pos[0] - 3, this.pos[1] + this.radius);
      } else if (this.thrust === 'down') {
        ctx.moveTo(this.pos[0] + 3, this.pos[1] - this.radius);
        ctx.lineTo(this.pos[0], this.pos[1] - this.radius - 8);
        ctx.lineTo(this.pos[0] - 3, this.pos[1] - this.radius);
      } else if (this.thrust === 'left') {
        ctx.moveTo(this.pos[0] + this.radius, this.pos[1] + 3);
        ctx.lineTo(this.pos[0] + this.radius + 8, this.pos[1]);
        ctx.lineTo(this.pos[0] + this.radius, this.pos[1] - 3);
      } else if (this.thrust === 'right') {
        ctx.moveTo(this.pos[0] - this.radius, this.pos[1] + 3);
        ctx.lineTo(this.pos[0] - this.radius - 8, this.pos[1]);
        ctx.lineTo(this.pos[0] - this.radius, this.pos[1] - 3);
      }
    }
    ctx.stroke();
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (this.isWrappable) {
      this.pos = this.game.wrap(this.pos)
    }
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var centerDist = Asteroids.Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  };

  MovingObject.prototype.collideWith = function (otherObject) {
   ; //nothing
  }

  MovingObject.prototype.isWrappable = true;



})();
