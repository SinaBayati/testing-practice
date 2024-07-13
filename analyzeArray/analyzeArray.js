export function analyzeArray(array){
  const sum = array.reduce((a,c) => a + c);
  const length = array.length;
  const average = Math.floor(sum / length);
  let min = array[0];
  let max = array[0];
  array.forEach(element => {
    if (element < min) {
      min = element;
    } else if (element > max) {
      max = element;
    }
  });

  return { average, min, max, length };
}