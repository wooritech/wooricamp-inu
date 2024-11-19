/**
 *  9093번 문제 (https://www.acmicpc.net/problem/9093)
 *
 *  문장이 주어졌을 때, 단어를 모두 뒤집어서 출력하는 프로그램을 작성하시오. 단, 단어의 순서는 바꿀 수 없다. 단어는 영어 알파벳으로만 이루어져 있다.
 *  첫째 줄에 테스트 케이스의 개수 T가 주어진다.
 *  각 테스트 케이스는 한 줄로 이루어져 있으며, 문장이 하나 주어진다.
 *  단어의 길이는 최대 20, 문장의 길이는 최대 1000이다. 단어와 단어 사이에는 공백이 하나 있다.
 *
 *  예제 입력)
 *  2    ---> 케이스의 개수(입력받을 문장의 수)
 *  I am happy today
 *  We want to win the first prize
 *
 *  예제 출력)
 *
 *  I ma yppah yadot
 *  eW tnaw ot niw eht tsrif ezirp
 *
 */

const input = `2
I am happy today
We want to win the first prize`;

const split = input.split('\n'); // input을 줄바꿈 기준으로 나눠 split에 저장
const lineCount = split[0]; // 입력받을 문장의 수를 strLength에 담아 저장
const reversedSentences = []; // 각 문장 뒤집힌 단어들을 저장할 배열

/**
 *  첫번째 값(입력받을 문장의 수)의 다음값부터 words의 담는다.
 *  스프레드 연산자를 이용해 단어별로 묶어 string을 배열로 바꿈
 */
for (let i = 1; i <= lineCount; i++) {
    const words = split[i].split(' ');
    const sentences = [];
    for (let j = 0; j < words.length; j++) {
        sentences.push([...words[j]].reverse());
    }
    reversedSentences.push(sentences); // 줄바꿈을 기준으로 즉 문장 단위로 배열에 담기 위해 두번째 for문 밖에서 reversedSentences에 Sentences 값 push
}
/**
 *  구조를 보면 배열안에 배열이 있다.
 *  각 내부 배열의 요소들을 공백으로 구분된 단어로 묶고, 최종적으로 줄바꿈을 포함한 하나의 문자열로 만듦
 */
const combinedArrays = reversedSentences
    .map((subArray) => subArray.map((innerArray) => innerArray.join('')).join(' '))
    .join('\n'); // 각 문장 문자열 줄바꿈으로 연결

console.log(combinedArrays);
