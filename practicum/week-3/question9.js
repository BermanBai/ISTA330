/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    
    var map = []

    for (i = 1; i <= n; i ++) {

        var sum = 0;

        var nums = i;

        while (nums) {

            sum += nums % 10;

            nums = Math.floor(nums / 10);
        }
        if (map.length < sum) {

            map[sum - 1] = new Array();
        }
        map[sum - 1].push(i);
    }
    max = 0
    for (i = 0; i < map.length; i++) {

        if (map[i].length > max) {

            max = map[i].length;
        }
    }
    result = 0;

    for (i = 0; i < map.length; i++) {

        if (map[i].length == max) {

            result += 1
        }
    }
    return result;

};
