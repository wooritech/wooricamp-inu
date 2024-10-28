const add = require('./10951.js');
const fs = require('fs');
const input = fs.readFileSync('./test/problem/10951/case.txt').toString().trim().split('\n');
const answer = fs.readFileSync('./test/problem/10951/case.js').toString().trim().split('\n');
const input2 = fs.readFileSync('./test/problem/10951/case2.txt').toString().trim().split('\n');
const answer2 = fs.readFileSync('./test/problem/10951/case2.js').toString().trim().split('\n');
const input3 = fs.readFileSync('./test/problem/10951/case3.txt').toString().trim().split('\n');
const answer3 = fs.readFileSync('./test/problem/10951/case3.js').toString().trim().split('\n');
const input4 = fs.readFileSync('./test/problem/10951/case4.txt').toString().trim().split('\n');
const answer4 = fs.readFileSync('./test/problem/10951/case4.js').toString().trim().split('\n');
const numAnswer = answer.map(Number).join('\n');
const numAnswer2 = answer2.map(Number).join('\n');
const numAnswer3 = answer3.map(Number).join('\n');
const numAnswer4 = answer4.map(Number).join('\n');

test('case 1', () => {
    expect(add(input)).toEqual(numAnswer);
});

test('case 2', () => {
    expect(add(input2)).toEqual(numAnswer2);
});

test('case 3', () => {
    expect(add(input3)).toEqual(numAnswer3);
});

test('case 4', () => {
    expect(add(input4)).toEqual(numAnswer4);
});
