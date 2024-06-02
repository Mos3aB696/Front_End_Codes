export function sum(a, b, ...rest) {
  return (a || 0) + (b || null) + (rest.length > 0 ? rest.reduce((acc, val) => acc + val) : 0);
}