(function () {
  window.Asteroids = window.Asteroids || {};

  // var DIM_X = window.innerHeight;
  // var DIM_Y = window.innerWidth;
  // var NUM_ASTEROIDS = 1;

  var Game = Asteroids.Game = function (dimx, dimy, numAsteroids) {
    this.dimx = dimx;
    this.dimy = dimy;
    this.asteroids = [];
    this.ship = new Asteroids.Ship( {
      pos: this.randomPosition(this.dimx, this.dimy),
      game: this
    });
    console.log(this.ship)
    for (i = 0; i < numAsteroids; i++){
      this.addAsteroids();
    }
  }

  Game.prototype.allObjects = function() {
    return this.asteroids.concat([this.ship]);
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

    this.allObjects().forEach(function (object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    var game = this;
    this.allObjects().forEach(function (object) {
      console.log(game.allObjects());
      // alert("h")
      object.move();
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
    for (var i = 0; i < this.allObjects().length - 1; i++) {
      for (var j = i + 1; j < this.allObjects().length; j++) {
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
          this.allObjects()[i].collidedWith(this.allObjects()[j]);
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  }

  Game.prototype.remove = function (object) {
    objectIndex = this.allObjects().indexOf(object);
    this.allObjects().splice(objectIndex, 1);
  }

})();
