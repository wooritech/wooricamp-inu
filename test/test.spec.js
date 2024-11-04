// 이 파일은 삭제 예정입니다.

//  실제 백준에서 제출할 때 입력값을 받기 위한 코드
//  const fs = require('fs');
//  const input = fs.readFileSync('/dev/stdin').toString().trim();

const sum = require('./test.js');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
