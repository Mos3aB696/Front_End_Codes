/**
 * Function to sum numbers
 * @param  {...any} numbers - Numbers to sum
 * @returns Sum Of Numbers
 */
export function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
