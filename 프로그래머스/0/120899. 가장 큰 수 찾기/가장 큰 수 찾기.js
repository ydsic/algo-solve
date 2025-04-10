function solution(array) {
  let max = array[0];
  let min = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      min = i;
    }
  }

  return [max, min];
}