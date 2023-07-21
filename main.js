//Dire al programma che per i
//di stampare in console numeri da 1 a 100

for (let number = 1; number <= 100; number++) {
  /* console.log(number); */
  //nuova variabile per il number
  let result = number;

  //Condizioni multipli di 3 & 5, 3 e dopo 5 con il ciclo.
  if (number % 3 == 0 && number % 5 == 0) {
    result = "FizzBuzz;";
  } else if (number % 3 == 0) {
    result = "Fizz";
  } else if (number % 5 == 0) {
    result = "Buzz";
  }
  console.log(result);
}

// Si devono calcolare prima i multipli di 3 e 5
// perché una volta trovati la sequenza continua.
// altrimenti trovando solo quelli del 3, o del 5
// si fermerebbe.
