function add(input) {
    const numArr = input;
    const Arr = [];
    const numbers = [];
    numArr.forEach((e) => {
        numbers = e.split(' ');
        Arr.push(Number(numbers[0]) + Number(numbers[1]));
    });
    return Arr.join('\n');
}
module.exports = add;
