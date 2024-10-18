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

let beforeCursor = input.split("\n")[0].split("");
let commands = input.split("\n").slice(2);
let afterCursor = [];

commands.forEach((cmd) => {
    if (cmd.startsWith("P")) {
        const char = cmd.split(" ")[1];
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
