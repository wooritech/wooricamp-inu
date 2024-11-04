/**
 *  킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성되어 있다.
 *
 *  조건) 첫째 줄에 동혁이가 찾은 흰색 킹, 퀸, 룩, 비숍, 나이트, 폰의 개수가 주어진다.
 *        이 값은 0보다 크거나 같고 10보다 작거나 같은 정수이다.
 *  입력)
 *  0 1 2 2 2 7
 *
 *  출력)
 *  1 0 0 0 0 1
 *
 *  입력2)
 *  2 1 2 1 2 1
 *
 * 출력2)
 * -1 0 0 1 0 7
 */

const input = '2 1 2 1 2 1';
const formatArr = ['1', '1', '2', '2', '2', '8'];
const split = input.split(' ');
const count = 6;
const newArr = [];
for (let i = 0; i < count; i++) {
    newArr[i] = Number(formatArr[i]) - split[i];
}
console.log(newArr);
