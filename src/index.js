module.exports = function count(s, pairs) {

  N = (pairs[pairs.length - 1][0] ** pairs[pairs.length - 1][1])

  How many such integer numbers k exist (0 <= k <= N), which follow next condition: 
  greatest common divisor of (k + j and N) is 1 if s[j] === 1 AND 
  greatest common divisor of (k + j and N) is NOT 1 if s[j] === 0.

  // answer - task solution
  const result = answer % 1000000007;
  return result;
}
