const gcd = (x, y) => {
  let num1 = x;
  let num2 = y;
  while (num2) {
    const t = num2;
    num2 = num1 % num2;
    num1 = t;
  }
  return num1;
};
export default gcd;
