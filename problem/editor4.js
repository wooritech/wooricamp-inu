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

let start = input.split('\n')[0].split('');
let commands = input.split('\n').slice(2); 
let arr = [];

commands.forEach((cmd) => {
    if ( cmd.startsWith('P') ) {
        const char = cmd.split(' ')[1];
        start.push(char)
    } else if (cmd === 'B') {
        if(start.length > 0) {
            start.pop();
        }
    } else if (cmd === 'L') {
        if(start.length > 0) {
            arr.push(start[start.length-1]);
            start.pop();
        }
    } else if (cmd === 'D') {
        if(arr.length > 0) {
            start.push(arr[arr.length-1]);
            arr.pop();
        }
    }
})

console.log(start.join('') + arr.reverse().join(''));
