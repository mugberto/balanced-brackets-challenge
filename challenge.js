function balancedBrackets(string) {
  // your code here
  const pairBrackets = { '[': ']', '(': ')', '{': '}'};
  const strArray = string.split('');
  let stack = [];

  strArray.forEach( char => {
    if (char === '[' || char === '{' || char === '(') {
      stack.push(char);
    }else if ( char === pairBrackets[stack[stack.length-1]]) {
      stack.pop();
    }    
  });

  return stack.length === 0;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
