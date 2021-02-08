/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var max = 0;

    var min = n;
    
    value = value.toString();

    for (var i = 0; i < n.length; i++) {

        if (value.charAt(i) > max){

            max = value.charAt(i);

        } if (value.charAt(i) <= min) {

            min = value.charAt(i);
        }
    }
        return max -min;
};
