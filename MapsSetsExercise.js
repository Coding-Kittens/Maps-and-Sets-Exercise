const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 3, 2, 1]));
console.log(hasDuplicate([1, 5, -1, 4]));
console.log(hasDuplicate("76876875545435"));

const vowelCount = (str) => {
  const vowelMap = new Map();
  str = str.toLowerCase();
  let regex = /[aeiou]/;
  for (let s of str) {
    if (regex.test(s)) {
      if (vowelMap.has(s)) {
        vowelMap.set(s, vowelMap.get(s) + 1);
      } else {
        vowelMap.set(s, 1);
      }
    }
  }
  return vowelMap;
};

console.log(vowelCount("sally sells sea shells by the sea shore"));
console.log(
  vowelCount(
    "how much wood could a woodchuck chuck if a woodchuck could chuck wood, as much wood as a woodchuck could chuck if a woodchuck could chuck wood"
  )
);
