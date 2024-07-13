export function reverseString(str){
  const result = [];
  const newStr = str.split("");
  while(newStr.length > 0){
    result.push(newStr.pop());
  }
  return result.join("");
}