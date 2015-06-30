(function () {
  window.Asteroids = window.Asteroids || {};
  var Util = Asteroids.Util = {};

    Util.inherits = function (childClass, parentClass) {
      function Surrogate() {}
      Surrogate.prototype = parentClass.prototype;
      childClass.prototype = new Surrogate();
    };

    Util.randomVec = function (length) {
      var vector = [];

      vector[0] = Math.floor( (Math.random() + .1) * length - length/2 );
      vector[1] = Math.floor( (Math.random() + .1) * length - length/2 );

      return vector;
    };

    Util.dist = function (pos1, pos2) {
      return Math.sqrt(
        Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
      );
    };

    Util.scale = function (vec, m) {
      return [vec[0] * m, vec[1] * m];
    };
})();
