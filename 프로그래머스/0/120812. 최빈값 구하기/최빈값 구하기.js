function solution(array) {
  const count = {};

  for (let num of array) {
    count[num] = (count[num] || 0) + 1;
  }

  const maxCount = Math.max(...Object.values(count));
  const modes = Object.keys(count).filter(
    key => count[key] === maxCount
  );

  return modes.length === 1 ? Number(modes[0]) : -1;
}
