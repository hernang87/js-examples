// These are examples for implementing
// the memoize technique using Javascript.
// The memoize technique involves having function
// results at hand so there's no need to
// recalculate the results for specific parameters.

// Example with one parameters
var fibonacci = (function() {
  // Initialize the cache object where
  // the calculated results will be stored.
  var cache = {};

  // This function can really be any,
  // I'm using the fibonacci sequence
  // because is a standard function where
  // the memoize technique can really be
  // seen explicitly.
  function fib(n) {
    var val;

    // First we check if the parameters
    // is contained in the cache object.
    // If it is we just return that value.
    if(n in cache) {
    	console.log('Returns cached value');
      return cache[n];
    }

    // Otherwise we execute the fibonacci sequence.
    if(n === 0 || n === 1 ) {
    	console.log('Value equals', n)
      val = n;
    } else {
    	console.log('Calculates fibonacci for', n);
      val = fib(n - 1) + fib(n - 2);
    }

    // After the fibonacci sequence has been calculated
    // I store on the "n" index the value calculated.
    // Next time I execute this function it will just
    // return the position's value without the need
    // of further calculation.
    cache[n] = val;

    return val;
  }

  return fib;
})();

var fibSix = fibonacci(6); // This execution calculates every fibonacci value from 0 to 6
var fibEight = fibonacci(8); // This execution only needs to calculate the fibonacci value for 7 and 8
