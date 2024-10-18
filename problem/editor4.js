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

const inputLines = input.split("\n"); // 한 번만 split 호출하여 결과를 저장
let beforeCursor = inputLines[0].split(""); // 첫 번째 입력값을 배열로 만들기
let commands = inputLines.slice(2); // 세 번째부터 끝까지 배열로 담기
let afterCursor = [];

commands.forEach((cmd) => {
    if (cmd.startsWith("P")) {
        const char = cmd.split(" ")[1]; // P로 시작할 경우 2번째값을 저장
        beforeCursor.push(char);
    } else if (cmd === "B") {
        if (beforeCursor.length > 0) {
            beforeCursor.pop();
        }
    } else if (cmd === "L") {
        if (beforeCursor.length > 0) {
            afterCursor.push(beforeCursor[beforeCursor.length - 1]);
            beforeCursor.pop();
        }
    } else if (cmd === "D") {
        if (afterCursor.length > 0) {
            beforeCursor.push(afterCursor[afterCursor.length - 1]);
            afterCursor.pop();
        }
    }
});

console.log(beforeCursor.join("") + afterCursor.reverse().join(""));
