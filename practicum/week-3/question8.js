/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
  
    var result = -1;

    for (var i = 0; i < input.length; i++){

        var nums = 1;

        for (var j = 0; j <input.length; j++){

            if (input[j] == input[i] && i !=j){

                nums += 1;
            } 
        }
        if (nums == input[i]) {

            if (input[i] > esult) {

                esult = input[i];
            }
        }
    }
    return result;

};
