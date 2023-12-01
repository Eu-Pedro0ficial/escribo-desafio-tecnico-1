

function addMultiples(limit) {
  // Validating whether the parameter is valid
  if(!Number.isInteger(limit) || limit <= 0){
    console.log("Try again");
    return "";
  }

  // Performing the sum
  let sum = 0;
  for (let index = 3; index < limit; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }

  return `Sum based on all positive integer values divisible by 3 and 5 and less than ${limit} is equal to: ${sum}`;
}

console.log(addMultiples(10));
console.log(addMultiples(11));
