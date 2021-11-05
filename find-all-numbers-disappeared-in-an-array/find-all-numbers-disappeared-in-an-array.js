/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var results = [];
    for (var i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            results.push(i)
        }
    }
    return results;
};