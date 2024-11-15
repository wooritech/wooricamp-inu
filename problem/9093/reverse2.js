// 코드 리팩터링

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
    const words = split[i].split(' ').map((word) => [...word].reverse().join('')); // 단어를 뒤집고 join으로 문자열로 변환
    reversedSentences.push(words.join(' ')); // 뒤집힌 단어를 문장으로 결합해 배열에 추가
}
/**
 *  구조를 보면 배열안에 배열이 있다.
 *  각 내부 배열의 요소들을 공백으로 구분된 단어로 묶고, 최종적으로 줄바꿈을 포함한 하나의 문자열로 만듦
 */
const combinedArrays = reversedSentences.join('\n'); // 각 문장 문자열 줄바꿈으로 연결

console.log(combinedArrays);
