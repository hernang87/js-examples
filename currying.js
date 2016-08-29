// Currying example in Javascript
// The following example is done for just a simple add functionality
function curriedAdd(x, y) {
  if(arguments.length === 0) {
    // In case we don't receive any parameter we simply return the function as it is,
    // expecting two values to add.
    return curriedAdd;
  } else if(arguments.length === 1) {
    // Instead if we receive only one parameter, we still need a second one to
    // perform the operation, so we return an anonymous function expecting
    // just one parameter, because the first part for the sum has already
    // been received on the first call.
    return z => {
      return x + z;
    }
  }
  return x + y;
}

var c1 = curriedAdd(); // typeof c1 === 'function'
var c2 = curriedAdd(2); // typeof c2 === 'function' here we have a partial application of curriedAdd
var c3 = c2(3); // c3 === 5
var c4 = c1(2)(3); // c4 === 5
