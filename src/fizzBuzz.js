function fizzbuzz(untillNum) {
  let fizzbuzzArray = [];
  for (let counter = 1; counter <= untillNum; counter++) {
    
    if (counter % 3 !== 0 && counter % 5 !== 0) {
      fizzbuzzArray.push(counter);
    } else if (counter % 3 === 0 && counter % 5 === 0) {
      fizzbuzzArray.push('FizzBuzz');
    } else if (counter % 3 === 0) {
      fizzbuzzArray.push('Fizz');
    } else if (counter % 5 === 0) {
      fizzbuzzArray.push('Buzz');
    }
  }

  return fizzbuzzArray;
}

console.log(fizzbuzz(30));