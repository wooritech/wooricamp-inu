//  백준 1406번: 에디터 (https://www.acmicpc.net/problem/1406)
//
//  이 문제는 커서 기반의 텍스트 에디터를 구현하는 문제입니다.
//
//  요구사항
//
//  1. 초기 텍스트 문자열과 커서는 문자열의 맨 끝에 위치합니다.
//  2. 총 N개의 명령어가 주어지며, 명령어는 다음 중 하나입니다.
//  'L': 커서를 왼쪽으로 한 칸 옮긴다. (단, 커서가 문자열의 맨 앞이면 무시된다)
//  'D': 커서를 오른쪽으로 한 칸 옮긴다. (단, 커서가 문자열의 맨 끝이면 무시된다)
//  'B': 커서 왼쪽의 문자를 삭제한다. (단, 커서가 문자열의 맨 앞이면 무시된다)
//  'P $': $라는 문자를 커서 왼쪽에 추가한다.
//
//  명령어가 수행된 이후, 최종적으로 만들어진 문자열을 출력해야 합니다.
//
//  예시
//  입력:
// abcdef
// 3       # 명령어의 개수
// P x     # 'x'를 커서 왼쪽에 추가
// L       # 커서를 왼쪽으로 이동
// P y     # 'y'를 커서 왼쪽에 추가
//
//  출력:
// abcyxdef
//
//  제약 조건:
// - 문자열의 길이는 최대 100,000자입니다.
// - 명령어의 개수도 최대 500,000개까지 주어질 수 있습니다.
// - 시간 복잡도를 고려하여, 리스트의 중간에서의 삽입과 삭제가 효율적으로 이루어져야 합니다.

const input = `abc
9
L
L
L
L
L
P x
L
B
P y`;

const inputLines = input.split('\n'); // 한 번만 split 호출하여 결과를 저장
const beforeCursor = inputLines[0].split(''); // 첫 번째 입력값을 배열로 만들기
const commands = inputLines.slice(2); // 세 번째부터 끝까지 배열로 담기
const afterCursor = [];

commands.forEach((cmd) => {
    if (cmd.startsWith('P')) {
        const char = cmd.split(' ')[1]; // P로 시작할 경우 2번째값을 저장
        beforeCursor.push(char); // 저장한 값을 beforeCursor에 push
    } else if (cmd === 'B') {
        if (beforeCursor.length > 0) {
            // 커서 왼쪽에 문자가 있는 경우에만 삭제합니다.
            beforeCursor.pop(); // beforeCursor의 맨 뒤 값을 삭제
        }
    } else if (cmd === 'L') {
        // 커서가 문자열의 맨 앞에 있지 않은 경우에만 이동합니다.
        if (beforeCursor.length > 0) {
            afterCursor.push(beforeCursor[beforeCursor.length - 1]); // afterCursor에 beforeCursor의 맨 끝에 자리를 push
            beforeCursor.pop(); // beforeCursor의 맨 뒤자리 삭제
        }
    } else if (cmd === 'D') {
        if (afterCursor.length > 0) {
            // 커서가 문자열의 맨 끝에 있지 않은 경우에만 이동합니다.
            beforeCursor.push(afterCursor[afterCursor.length - 1]); // beforeCursor에 afterCursor에 맨 끝에 자리를 push
            afterCursor.pop(); // afterCursor의 맨 뒤자리 삭제
        }
    }
});

console.log(beforeCursor.join('') + afterCursor.reverse().join('')); // beforeCursor를 join으로 문자열로 추출 + afterCursor를 reverse()를 이용해 반대로 해주기
