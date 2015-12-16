function binaryConverter(num) {
  num = parseInt(num);
  var binaryResult = [];
  var remainder;
  var quotient = num / 2;
  var counter = 0;

  while (counter < 3) {

   remainder = num % 2;
   quotient = Math.floor(num / 2);
   num = quotient;



   binaryResult.push(remainder);

   if (quotient === 0 && remainder === 0)
    { counter ++; }
  }
  return parseInt(binaryResult.reverse().join(""));
}
