const input = `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`;
// function insert(str, num) {
//     let left = [];
//     let right = [];

//     if(num < start.length){
//         for(let i = 0; i < num; i++){
//             left.push(start[i]);
//         };
//         for(num; num<start.length; num++){
//             right.push(start[num]);
//         };
//     }
//      start = left.concat(str).concat(right);
//     return start;

// };

// function B(num) {
//     if (num > 0) {
//         let left = [];
//         let right = [];

//         for (let i = 0; i < num - 1; i++) {
//             left.push(start[i]);
//         }
//         for (let i = num; i < start.length; i++) {
//             right.push(start[i]);
//         }
//         start = left.concat(right);
//         cursor--;
//     }
//     return start;
// }

let cursor = start.length;
const splitStr = input.split('\n');
let newArr = start;
let command = [];

for (let i = 2; i < splitStr.length; i++) {
    command[i - 2] = splitStr[i];
}

for (let i = 0; i < command.length; i++) {
    if (command[i] === 'B') {
        if (cursor > 0) {
            let left = [];
            let right = [];

            for (let j = 0; j < cursor - 1; j++) {
                left.push(newArr[j]);
            }

            for (let j = cursor; j < newArr.length; j++) {
                right.push(newArr[j]);
            }

            newArr = left.concat(right);
            cursor--;
        }
        if (cursor <= 0) {
            cursor = 0;
        }
    } else if (command[i] === 'D') {
        if (cursor < newArr.length) {
            cursor++;
        }
    } else if (command[i] === 'L') {
        if (cursor > 0) {
            cursor--;
        }
    } else if (command[i].includes('P')) {
        const Alphabet = command[i].split(' ')[1];
        let left = [];
        let right = [];

        for (let j = 0; j < cursor; j++) {
            left.push(newArr[j]);
        }

        for (let j = cursor; j < newArr.length; j++) {
            right.push(newArr[j]);
        }

        newArr = left.concat(Alphabet).concat(right);
        cursor++;
    }
}

console.log(newArr.join(''));
