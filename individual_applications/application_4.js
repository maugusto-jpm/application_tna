function sum_of_multiples_of_five_and_three_lower_than(number) {
  let sum = 0;
  for(var n = 3; n < number; n++) {
    if ((n % 3 == 0) || (n % 5 == 0)) {
      sum += n;
    }
  }

  return sum;
};

console.log(`Soma dos múltiplos de 3 e 5 menores que 10: ${sum_of_multiples_of_five_and_three_lower_than(10)}`);
console.log(`Soma dos múltiplos de 3 e 5 menores que 15: ${sum_of_multiples_of_five_and_three_lower_than(15)}`);
console.log(`Soma dos múltiplos de 3 e 5 menores que 20: ${sum_of_multiples_of_five_and_three_lower_than(20)}`);
