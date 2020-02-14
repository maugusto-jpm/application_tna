function factorial(value) {
  if (value <= 1) return 1;
  return value * factorial(value - 1);
}

console.log(`Fatorial de 0: ${factorial(0)}`);
console.log(`Fatorial de 1: ${factorial(1)}`);
console.log(`Fatorial de 2: ${factorial(2)}`);
console.log(`Fatorial de 3: ${factorial(3)}`);
console.log(`Fatorial de 4: ${factorial(4)}`);
console.log(`Fatorial de 5: ${factorial(5)}`);
console.log(`Fatorial de 6: ${factorial(6)}`);
console.log(`Fatorial de 7: ${factorial(7)}`);
console.log(`Fatorial de 8: ${factorial(8)}`);
console.log(`Fatorial de 9: ${factorial(9)}`);
console.log(`Fatorial de 10: ${factorial(10)}`);