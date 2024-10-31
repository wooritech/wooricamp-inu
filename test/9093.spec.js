const reverse = require('./9093');
const fs = require('fs');
const input = fs.readFileSync('./test/problem/9093/input.txt').toString().trim();
const answer = fs.readFileSync('./test/problem/9093/answer.txt').toString().trim();
const input2 = fs.readFileSync('./test/problem/9093/input2.txt').toString().trim();
const answer2 = fs.readFileSync('./test/problem/9093/answer2.txt').toString().trim();
const input3 = fs.readFileSync('./test/problem/9093/input2.txt').toString().trim();
const answer3 = fs.readFileSync('./test/problem/9093/answer2.txt').toString().trim();
const input4 = fs.readFileSync('./test/problem/9093/input2.txt').toString().trim();
const answer4 = fs.readFileSync('./test/problem/9093/answer2.txt').toString().trim();
test('9093 case 1', () => {
    expect(reverse(input)).toEqual(answer);
});

test('9093 case 2', () => {
    expect(reverse(input2)).toEqual(answer2);
});

test('9093 case 3', () => {
    expect(reverse(input3)).toEqual(answer3);
});

test('9093 case 4', () => {
    expect(reverse(input4)).toEqual(answer4);
});
