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




})();
