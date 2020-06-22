
//PART1
let products = ['bred', 'potatoes', 'cucumbers', 'tomatoes', 'mushrooms', 'dill', 'sugar'];

let lastElement = products[products.length -1];
console.log(lastElement);


//PART2
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
styles.splice(-1, 0, 'Класика');

console.log(styles);

console.log(styles.slice(1));

styles.unshift('Реп');
console.log(styles);
styles.unshift('Реггі');
console.log(styles);

//PART3
const array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

function find(arr, value){
  if(arr.includes(value)){
    return `В масиві присутній значення '${value}' з індексом ${arr.indexOf(value)}`;
  }
  else{
    return `-1 в масиві відсутнє значення`;
  }
};
console.log(find(array));
console.log(find(array, 'ten'));

// теж саме, лиш вирішив попрактикувати оператор '?'
const Array = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

function find(arr, value){
  arr.includes(value) ? console.log(`В масиві присутній значення '${value}' з індексом ${arr.indexOf(value)}`) : console.log(`-1 в масиві відсутнє значення`);
}
console.log(find(Array, 'nine'));
console.log(find(Array));


//PART4
const arr = [1, 5, 8, 2, 9, 0, 12, 54, 13];

function filterRange(array, a, b){
  let newArr = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] >= a && array[i] <= b){
      newArr.push(array[i]);
    }
  }
  return newArr;
}
console.log(filterRange(arr, 6, 10));

//PART5
// function camelize(str){

// let words = 'my-short-string';
// let result = words.match(/[^_\W]+/g).join('').toUpperCase()+str.slice(1);
// console.log(result);
// }

let str = 'my-short-string';

function camelize(str){
  let hyphen = str.split('-');
  for(let i = 0; i < hyphen.length; i++){
    hyphen[i] = hyphen[i].charAt(0).toUpperCase() + hyphen[i].slice(1);
  }
  return hyphen.join('');
}
console.log(camelize(str));
