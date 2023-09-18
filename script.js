const areBracketsBalanced = (str) => {
  const strAr = str.split("");
  const arLength = strAr.length;

  if (arLength === 0) return true;
  if (arLength % 2 !== 0) return false;

  const map = {")":"(","]":"[","}":"{",};
  const stack = [];

  for (let i = 0; i < arLength; i++) {
    const item = strAr[i];

    if ( item === "(" ) stack.push(item);

    if ( item === ")" ) {
      if ( stack.pop() !== map[")"])  {
        return false;
      }
    }
  }

  return stack.length === 0;
};

areBracketsBalanced("()()(())") //true