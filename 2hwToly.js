//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 1;
let resuit = 1
while(i < 11) {
    result = result *2
    i++
}
console.log(result)



//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const power = function(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
     result = result *2
    }
    return result;
  }
  console.log(power(10));



  //2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее Пример в консоли:
  //:)
  //:):)
  //:):):)
  //:):):):)
  //:):):):):)

let pp = ':)';
let result_2 = '';
for( let i = 1; i <= 4; i++) {
   result_2 += pp
    console.log(result_2)
}


//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
    let result = '';
    for (let i = 1; i<=numberOfRows; i++){
        result+=stroka
        console.log(result)
    }
}
printSmile(':(', 5) 



//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв. e.g. function getWordStructure(word) В консоли: Слово (word) состоит из  (число) гласных и (число) согласных букв

function getWordStructure2(word) {
    const vowels = 'aeiouy'.split('')
    const consonants = 'bcdfghjklmnpqrstvwxz'.split('')
    let numberOfVowels = 0;
    let numberofConsonants = 0;
    for(char of word.toLowerCase()) {
        if (vowels.includes(char)) numberOfVowels++;
        if (consonants.includes(char)) numberofConsonants++;

    }
    console.log('слово &{word} состоит из &{numberOfVowels} гласных и  &{numberofConsonants} согласных букв')
}

getWordStructure2('case')
getWordStructure2('case')
getWordStructure2('check-list')





//4**. Написать функцию, которая проверяет, является ли слово палиндромом e.g. function isPalindrom(word)

function isPalindrom(word){
        var len = Math.floor(word.length / 2);
        for (var i = 0; i < len; i++)
          if (word[i] !== word[word.length - i - 1])
            return 'Palindrome';
        return 'not a palindrome';
      }
      console.log(isPalindrom("404"))