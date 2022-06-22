const longestSubStrKChars = require("./longestSubStrKChars.");

describe("Maximum Sum Subarray of Size K (easy)", () => {
  var testValues = [
    ["araaci", 2, 4],
    ["araaci", 1, 2],
    ["cbbebi", 3, 5],
  ];
  test.each(testValues)(
    "The function takes string %s and K %d and produces result %d",
    (string, k, expected) => {
      expect(longestSubStrKChars(string, k)).toBe(expected);
    }
  );
});
