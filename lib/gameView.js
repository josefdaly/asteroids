(function () {
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function (width, height) {
    this.width = width;
    this.height = height;
  }

  GameView.prototype.start = function(canvasEl) {
    var ctx = canvasEl.getContext("2d");
    this.game = new Asteroids.Game(
      this.width,
      this.height,
      30
    );
    // this.bindKeyHandlers();
    window.setInterval((function () {
      this.game.step();
      this.game.draw(ctx);
    }).bind(this), 20);
  };


  GameView.prototype.bindKeyHandlers = function() {
    key('i', Asteroids.Ship.power([1,1]).bind(this))
  }

})();
