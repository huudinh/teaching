console.log('Spread operator');

const arr = [1, 2, 3];

console.log(arr);

console.log(...arr);

const arr2 = [0,...arr, 4];
console.log(arr2);

const concatedArr = [...arr, ...arr2];
console.log('concatedArr', concatedArr);

const obj = { name: 'Mindx' };
const objCloned = {
    address: 'Hanoi',
    name: 'CI_76',
    ...obj,
};
console.log(objCloned);

const x = 1;
const y = 2;
const z = 3;
Math.max(x, y, z);

const sum = (a, b, ...numbers) => {
    let total = 0;
    for (i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
};

console.log(sum(1, 2, 3, 4, 5, 6));