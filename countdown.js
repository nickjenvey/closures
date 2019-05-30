var countdownGenerator = function (x) {

  let timer = x;

  return function() {
    if (timer === 0) {
      console.log('Blast Off!');
    } else if (timer > 0) {
      console.log('T-minus ' + timer + "...")
    } else {
      console.log('Rockets already gone, bub!');
    }
    timer--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!