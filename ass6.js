
//1
const str = ["apple", "banana", "apple", "orange", "banana", "pear", "apple"];

let ans = str.reduce(function (acc, item) {
    if (acc[item]) {
        acc[item] += 1; 
    } else {
        acc[item] = 1;  
    }
    return acc;
}, {});

console.log(ans);


//2

const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

let sum=numbers.reduce(function(acc,item){
    if(item%3===0 ){
        acc+=item
    }else if(item%5===0){
      acc+=item  
    }
    return acc
},0)
console.log(sum)

//3
const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];
  
const palindromes = words.filter(word => word === word.split('').reverse().join(''));

console.log(palindromes);

//4

const strings = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];
  
const swappedStrings = strings.map(str => str.split('').reverse().join(''));
  
console.log(swappedStrings);

//5

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];
  
  sentences.forEach((sentence, index) => {
    const wordCount = sentence.split(' ').length;
    console.log(`Sentence ${index + 1} contains ${wordCount} words.`);
  });

  //6

  const numbers1 = [1, 2, 3, 4, 5, 7];

  const sumOfOddSquares = numbers1
    .filter(num => num % 2 !== 0)    
    .map(num => num * num)          
    .reduce((acc, num) => acc + num, 0);  
  
  console.log(sumOfOddSquares);
  
  