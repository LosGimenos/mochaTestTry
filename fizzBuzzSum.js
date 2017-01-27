const fizzBuzzSum = n => {
  const fizzArray = [];
  let reducedFizz = 0;
  const numberArray = Array.from({length: n}, (v, i) => i + 1);

  for (let i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] % 3 == 0) {
      fizzArray.push(numberArray[i]);
    } else if (numberArray[i] % 5 == 0) {
      fizzArray.push(numberArray[i]);
    }
  }
  if (fizzArray.length > 0) {
    let buzz = fizzArray.reduce(function(prev, curr) {
    return prev + curr;
    });
    return reducedFizz = buzz;
  }
  return reducedFizz;
};

//flash worked aspect
module.exports = { fizzBuzzSum };
