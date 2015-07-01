(function () {
  window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function (dimx, dimy, numAsteroids) {
    this.dimx = dimx;
    this.dimy = dimy;
    this.numAsteroids = numAsteroids;
    this.reset();
  }

  Game.prototype.addShip = function() {
    this.ship = new Asteroids.Ship( {
      pos: this.randomPosition(this.dimx, this.dimy),
      game: this
    });

    return this.ship
  }

  Game.prototype.allObjects = function() {
    return this.asteroids.concat([this.ship]).concat(this.bullets);
  }

  Game.prototype.addBullet = function(bullet) {
    this.bullets.push(bullet);
  }


  Game.prototype.randomPosition = function(dimx, dimy) {
    var pos = [];
    pos[0] = Math.floor( Math.random() * dimx );
    pos[1] = Math.floor( Math.random() * dimy );

    return pos;
  }

  Game.prototype.addAsteroids = function (options) {
    var randVel = [0, 0];
    while ((Math.abs(randVel[0]) < 1) && (Math.abs(randVel[1]) < 1)) {
      randVel = Asteroids.Util.randomVec(5)
    }

    this.asteroids.push(new Asteroids.Asteroid( {
      pos: options.pos,
      vel: randVel,
      game: this,
      radius: options.radius
    }));
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.dimx, this.dimy);

    this.allObjects().forEach(function (object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    var game = this;
    this.allObjects().forEach(function (object) {
      object.move();
    })
  }

  Game.prototype.wrap = function (pos) {

    if (pos[0] < -20) {
      pos[0] = this.dimx + pos[0] + 20;
    } else if (pos[0] > this.dimx + 20) {
      pos[0] = pos[0] % this.dimx - 20;
    } else if (pos[1] < -20) {
      pos[1] = this.dimy + pos[1] + 20;
    } else if (pos[1] > this.dimy + 20) {
      pos[1] = pos[1] % this.dimy - 20;
    }

    return pos;
  }

  Game.prototype.checkCollisions = function () {
    var that = this;
    this.bullets.forEach(function(bullet) {
      that.allObjects().forEach(function(object) {
        if (object instanceof Asteroids.Bullet) {
          ; // do nothig
        } else if (bullet.isCollidedWith(object)) {
          bullet.collideWith(object);
        }
      });
    });
    this.asteroids.forEach(function(asteroid) {
      if (this.ship.isCollidedWith(asteroid)) {
        this.ship.collideWith(asteroid);
      }
    }.bind(this));
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  }

  Game.prototype.remove = function (object) {
    objectIndex = this.allObjects().indexOf(object);
    this.allObjects().splice(objectIndex, 1);
  }

  Game.prototype.reset = function (object) {
    this.asteroids = [];
    this.bullets = [];
    for (i = 0; i < this.numAsteroids; i++){
      var options = {
        pos: this.randomPosition(this.dimx, this.dimy),
        radius: Math.random() * (40 - 10) + 10,
      }
      this.addAsteroids(options);
    }
    $('#sheild').attr('value', 100);
    $('#sheild').html('100');
    $('#score').attr('value', 0);
    $('#score').html('0');
    key.unbind('space');
  }
})();
