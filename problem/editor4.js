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

let beforeCursor = input.split("\n")[0].split(""); // 첫번째 입력값을 배열로 만들기
let commands = input.split("\n").slice(2); // 입력값의 세번째부터 끝까지 배열로 담기
let afterCursor = [];

commands.forEach((cmd) => {
    if (cmd.startsWith("P")) {
        const char = cmd.split(" ")[1]; //
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

// console.log(beforeCursor.join("") + afterCursor.reverse().join(""));
console.log(commands);
