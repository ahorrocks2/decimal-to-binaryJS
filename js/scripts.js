function binaryConverter(num) {
  var binaryResult = [];
  var remainder;
  var quotient;
  var counter = 0;

  while (counter < 1) {

   remainder = num % 2;
   quotient = Math.floor(num / 2);
   num = quotient;



   binaryResult.push(remainder);

   if (quotient === 0 && remainder === 0)
    { counter ++; }
  }

  return parseInt(binaryResult.reverse().join(""));
}


$(document).ready(function() {
  $("form").submit(function(event) {
    var input = parseInt($('#numEntry').val());
    var result = binaryConverter(input);

    $('#result').text(result);
    $('#result').show();
    event.preventDefault();
  });

});
