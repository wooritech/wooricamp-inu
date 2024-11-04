const chess = require('./3003');
const fs = require('fs');
const input = fs.readFileSync('./test/problem/3003/input.txt').toString().trim();
const answer = fs.readFileSync('./test/problem/3003/answer.txt').toString().trim();
const input2 = fs.readFileSync('./test/problem/3003/input2.txt').toString().trim();
const answer2 = fs.readFileSync('./test/problem/3003/answer2.txt').toString().trim();
const input3 = fs.readFileSync('./test/problem/3003/input3.txt').toString().trim();
const answer3 = fs.readFileSync('./test/problem/3003/answer3.txt').toString().trim();
const input4 = fs.readFileSync('./test/problem/3003/input4.txt').toString().trim();
const answer4 = fs.readFileSync('./test/problem/3003/answer4.txt').toString().trim();
const input5 = fs.readFileSync('./test/problem/3003/input5.txt').toString().trim();
const answer5 = fs.readFileSync('./test/problem/3003/answer5.txt').toString().trim();
test('3003 case 1', () => {
    expect(chess(input)).toEqual(answer);
});

test('3003 case 2', () => {
    expect(chess(input2)).toEqual(answer2);
});

test('3003 case 3', () => {
    expect(chess(input3)).toEqual(answer3);
});

test('3003 case 4', () => {
    expect(chess(input4)).toEqual(answer4);
});

test('3003 case 5', () => {
    expect(chess(input5)).toEqual(answer5);
});
