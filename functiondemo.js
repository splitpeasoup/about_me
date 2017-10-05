'use strict';

var x = 19;
function foo(){
  console.log('I am outside of bar:',x);
  var x = 10;
  x++
  console.log(x);
})();
