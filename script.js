let arrey = [];
arrey.push(1);
arrey.push(2);
arrey.push(3);
console.log(arrey);
// метод push 


let arrey1 = ['a', 'b', 'c'];
let arrey2 = ['d', 'e', 'f'];

let arrey3 = arrey1.concat(arrey2);
console.log(arrey3);
// метод concat


console.log(arrey3.join('-'));
// метод join


arrey3.pop();
console.log(arrey3);
//метод pop (видаляє останній елемент в масиві)


arrey3.shift();
console.log(arrey3);
//метод shift (видаляє перший елемент в масиві)


arrey3.unshift(3);
console.log(arrey3);
//метод unshift(); додає перший елемент в масив


let array4 = new Array(1, 5, 2, 7, 9, 3);
array4.sort();
console.log(array4);
//метод sort(); сортує значення в масиві по порядку


arrey3.reverse();
console.log(arrey3);
//метод reverse видає значення масиву задом на перед


let array6 = [1, 2, 3, 4, 5, 6];
console.log(array6.slice(3));
//метод slice видаляє зазначену кулькість елементів з масиву

console.log(array6.slice(2,4));
//метод slice виводить задану кількість елементів з масиву


array6.splice(2,0, 'qwe', 321)
console.log(array6);
//метод splice  добавляє задані елементи в масив


delete array6[0];
console.log(array6);
// метод delete дозволяє видаляти елементи з масиву

