const input = `1 1
2 3
3 4
9 8
5 2`;
const inputBOJ = input.toString().trim().split('\n');
const numArr = inputBOJ;
const Arr = [];
numArr.forEach((e) => {
    numbers = e.split(' ');
    Arr.push(Number(numbers[0]) + Number(numbers[1]));
});
console.log(Arr.join('\n'));
