const palindrome = require('./10988.js');
const fs = require('fs');
const input = fs.readFileSync('./test/problem/10988/input.txt').toString().trim();
const answer = Number(fs.readFileSync('./test/problem/10988/answer.txt').toString().trim());
const input2 = fs.readFileSync('./test/problem/10988/input2.txt').toString().trim();
const answer2 = Number(fs.readFileSync('./test/problem/10988/answer2.txt').toString().trim());
const input3 = fs.readFileSync('./test/problem/10988/input3.txt').toString().trim();
const answer3 = Number(fs.readFileSync('./test/problem/10988/answer3.txt').toString().trim());
const input4 = fs.readFileSync('./test/problem/10988/input4.txt').toString().trim();
const answer4 = Number(fs.readFileSync('./test/problem/10988/answer4.txt').toString().trim());

test('palindrome case 1', () => {
    expect(palindrome(input)).toEqual(answer);
});

test('palindrome case 1', () => {
    expect(palindrome(input2)).toEqual(answer2);
});

test('palindrome case 1', () => {
    expect(palindrome(input3)).toEqual(answer3);
});

test('palindrome case 1', () => {
    expect(palindrome(input4)).toEqual(answer4);
});
