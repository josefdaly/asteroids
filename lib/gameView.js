(function () {
  window.Asteroids = window.Asteroids || {};

  // var Game = Asteroids.Game = function (dimx, dimy, numAsteroids) {
  //   this.dimx = dimx;
  //   this.dimy = dimy;
  //   this.numAsteroids = numAsteroids;
  // }

  var GameView = Asteroids.GameView = function () {}

  GameView.prototype.start = function(canvasEl) {
    var ctx = canvasEl.getContext("2d");
    this.game = new Asteroids.Game(window.innerWidth, window.innerHeight, 30);

    window.setInterval((function () {
      this.game.step();
      this.game.draw(ctx);
    }).bind(this), 20);
  };


})();
