function solution(numer1, denom1, numer2, denom2) {

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const lcm = (a, b) => (a * b) / gcd(a, b);

  const commonDenom = lcm(denom1, denom2);
  const newNumer1 = numer1 * (commonDenom / denom1);
  const newNumer2 = numer2 * (commonDenom / denom2);

  const addedNumer = newNumer1 + newNumer2;

  const finalGcd = gcd(addedNumer, commonDenom);
  const finalNumer = addedNumer / finalGcd;
  const finalDenom = commonDenom / finalGcd;

  return [finalNumer, finalDenom];
}
