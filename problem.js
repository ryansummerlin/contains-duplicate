// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// I ended up using a hash map to solve this problem to cut down on the time complexity.

// Time complexity: O(n) - single for loop going through and hashing values until it finds a duplicate or finishes
// Space complexity: O(n) - creating the hash table takes up O(n) space

var containsDuplicate = function(nums) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (hash[n] !== undefined) {
            return true;
        }
        hash[n] = i;
    }

    return false;
};
