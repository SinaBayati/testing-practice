export function capitalize(str){
  return str
    .split("")
    .map((c,i) => i == 0 ? c.toUpperCase() : c.toLowerCase())
    .join("");
};