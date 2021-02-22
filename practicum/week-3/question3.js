/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {

  var result = [];

  for (var i = 0; i < n; i++){

    result[i] = []

    for (var z = 0; z <= i; z++) {

      if (i == z | z == 0) {

        result[i].push(1);

      }
      else{

        result[i].push(result[i - 1][z] + result[i-1][z-1]);

      }
      
    }

  }
  return result

};
