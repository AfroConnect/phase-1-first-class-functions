function receivesAFunction(callback) {
    if (typeof callback === "function") {
      callback();
    } else {
      throw new Error("Argument is not a function");
    }
  }

  function returnsANamedFunction() {
    function namedFunction() {
      // function body here
    }
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {
      // function body here
    }
  }