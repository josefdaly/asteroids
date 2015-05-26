(function () {
  window.Asteroids = window.Asteroids || {};

  // var DIM_X = window.innerHeight;
  // var DIM_Y = window.innerWidth;
  // var NUM_ASTEROIDS = 1;

  var Game = Asteroids.Game = function (dimx, dimy, numAsteroids) {
    this.dimx = dimx;
    this.dimy = dimy;
    this.asteroids = [];
    for (i = 0; i < numAsteroids; i++){
      this.addAsteroids();
    }
  }

  Game.prototype.randomPosition = function(dimx, dimy) {
    var pos = [];
    pos[0] = Math.floor( Math.random() * dimx );
    pos[1] = Math.floor( Math.random() * dimy );

    return pos;
  }

  Game.prototype.addAsteroids = function () {
    this.asteroids.push(new Asteroids.Asteroid( {
      pos: this.randomPosition(this.dimx, this.dimy),
      vel: Asteroids.Util.randomVec(5),
      game: this
    }));
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.dimx, this.dimy);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx)
    });
  };

  Game.prototype.moveObjects = function () {

    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    })
  }

  Game.prototype.wrap = function (pos) {

    if (pos[0] < 0) {
      pos[0] = window.innerWidth + pos[0];
    } else if (pos[0] > window.innerWidth) {
      pos[0] = pos[0] % window.innerWidth;
    } else if (pos[1] < 0) {
      pos[1] = window.innerHeight + pos[1];
    } else if (pos[1] > window.innerHeight) {
      pos[1] = pos[1] % window.innerHeight;
    }

    return pos;
  }

  Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.asteroids.length - 1; i++) {
      for (var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          console.log(this);
          this.collidedAsteroids(i, j)
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  }

  Game.prototype.remove = function (astIdx) {
    this.asteroids.splice(astIdx, 1);
  }

  Game.prototype.collidedAsteroids = function(i, j) {
    this.remove(i);
    this.remove(j);
  }

})();
