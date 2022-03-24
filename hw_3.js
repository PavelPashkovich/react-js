// Узнать, является ли строка палиндромом

const string = "ololo ololo";
const isPalindrome = (string) => {
  const newString = string.split("").reverse().join("");
  return newString.toLowerCase() === string.toLowerCase() || false;
};
console.log(isPalindrome(string));

// Дано число, нужно складывать чИсла числА пока числО не станет однозначным )

const number = 9999834;

const getSum = (number) => {
  let arr = String(number).split("");
  if (arr.length > 1) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += +arr[i];
    }
    return getSum(sum);
  } else {
    return +arr[0];
  }
};

console.log(getSum(number));
