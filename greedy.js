// The greedy algorithm lets you calculate the best combination
// taking a number of options, for example different bill values,
// and a wanted amount, in this case a number of dollars, in order
// to use the least number of elements possible.
// In this example we want to use the least number of bills to reach
// a certain value. This algorithm can be used, for example, in ATMs.

// First we define what options we have. In this case, what bill options.
const BILLS = [100, 50, 20, 10, 5, 1];

// We have two parameters: options and amount.
// What we will return is array with a number of bills for each position
// that will correspond with the order of the bills on the constant.
var calculateChange = (options, amount) => {
  var i = 0; // Our index to iterate over the options array
  // At first, we set every value of the returned array to 0
  var billCount = options.map(() => 0);

  // Now, for each bill option we have
  // we check if it's still smaller than the total amount.
  options.forEach(val => {
    // While the current option value is smaller than the wanted amount
    // we keep adding bills of that option.
    // Once the value of the current option is bigger than the wanted amount
    // we go to the next option.
    while (val <= amount) {
      amount -= val;
      billCount[i]++;
    }
    i++;
  });

  return billCount;
}

console.log(calculateChange(BILLS, 240));
