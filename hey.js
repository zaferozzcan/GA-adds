let s = "abacabad";

function firstNotRepeatingCharacter(s) {
  let freq = {};
  let nonRepeatingChars = [];
  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] | 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] === 1) {
      nonRepeatingChars.push(key);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (nonRepeatingChars.includes(s[i])) return s[i];
  }
  return "_";
}

console.log(firstNotRepeatingCharacter(s));
