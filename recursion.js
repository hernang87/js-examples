function factorial(n) {
    // If n === 0 it's the limit case,
    // when we know when to stop calling
    // the recursive function.
    if(n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}
