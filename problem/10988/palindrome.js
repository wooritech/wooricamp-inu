/**
 *  앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어면 1출력 아니면 0출력
 *
 *  입력 예제)
 *  level
 *
 *  출력 예제)
 *  1
 */
const input = 'level';

const split = input.split('');
const reverseStr = split.reverse().join('');

if (input === reverseStr) {
    console.log(1);
} else {
    console.log(0);
}
