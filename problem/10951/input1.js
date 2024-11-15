/**
 * 10951번  문제 (https://www.acmicpc.net/problem/10951)
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
 *
 *  입력 예시:
 *  1 1
 *  2 3
 *  3 4
 *  9 8
 *  5 2
 *
 *  출력 예시:
 *  2
 *  5
 *  7
 *  17
 *  7
 */

const input = `1 1
2 3
3 4
9 8
5 2`;

const inputBOJ = input.toString().split('\n'); // 백준에서 제출할때와 최대한 비슷하게 맞춤
const numArr = inputBOJ;
const sum = []; // 숫자의 합을 담을 배열 초기화
numArr.forEach((line) => {
    // forEach를 사용해 순회
    const numbers = line.split(' '); // numArr를 순회하며 배열 순서대로 띄어쓰기 기준으로 나눠 numbers에 저장
    sum.push(Number(numbers[0]) + Number(numbers[1])); // numbers의 첫번째, 두번째 값을 숫자로 바꾼후 더하여 sum배열에 담기
});
console.log(sum.join('\n')); // 줄바꿈으로 합치기
