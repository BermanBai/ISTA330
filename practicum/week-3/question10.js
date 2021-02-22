/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {

    var Sorted = input.sort(function(a, b){return a - b});

    var mindiff = sorted[1]-sorted[0];

    var minpairs = []

    for (let i = 1; i < sorted.length; i++) {

        if (sorted[i] - sorted[i - 1] < mindiff) {

            mindiff = sorted[i] - sorted[i - 1];
        }
    }
    for (i = 0; i < sorted.length; i++) {

        for (j = i + 1; j < sorted.length; j++){

            if ((sorted[j] - sorted[i] == mindiff)) {

                minpairs.push([sorted[i], sorted[j]])
            }
        }
    }
    return minpairs;

};
