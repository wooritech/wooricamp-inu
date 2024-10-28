import { string } from "./editor";
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
function editior2(string: string) {
    const splitStr = string.split("\n");
    let startStr = splitStr[0].split("");
    let cursor = startStr.length;
    const length = Number(splitStr[1]);
    const command = [];

    for (let i = 2; i < length + 2; i++) {
        command[i - 2] = splitStr[i];
    }

    for (let j = 0; j < command.length; j++) {
        if (command[j].includes("P")) {
            const Alphabet = command[j].split("")[2];
            startStr.splice(cursor, 0, Alphabet);
            cursor += 1;
        } else if (command[j].includes("L")) {
            cursor -= 1;
            if (cursor <= 0) {
                cursor = 0;
            }
        } else if (command[j].includes("D")) {
            cursor += 1;
            if (cursor > startStr.length) {
                cursor = startStr.length;
            }
        } else if (command[j].includes("B")) {
            if (cursor > 0) {
                startStr.shift();
                cursor -= 1;
            }
        }
    }

    console.log(startStr.join(""));
}

editior2(string);
