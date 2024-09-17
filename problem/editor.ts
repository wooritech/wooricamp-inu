console.time()
export const string = `abc
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

function editior(s:string) {
    const splitStr = s.split('\n');
    let startStr  = splitStr[0].split('');
    let cursor = startStr.length;
    const length  = Number(splitStr[1]);
    const command = [];

   for(let i = 2; i < length+2; i++ ) {
    command[i-2] = splitStr[i];
   };
   for(let i = 0; i < command.length; i++){
    if(command[i].includes('P')){
        const word = command[i].split('');
        const Alphabet = word[word.length-1];
        if(cursor == 0){
            startStr[cursor] = Alphabet + startStr[cursor] ;
        }else{
            startStr[cursor-1] = startStr[cursor-1] + Alphabet; 
        }
    }else if(command[i].includes('L')){
       cursor = cursor - 2;
       if(cursor < 0) {
        cursor = 0;
       }
    }else if(command[i].includes('D')){
        cursor = cursor + 2
       if(cursor > startStr.length) {
        cursor = startStr.length
       }
    }else if(command[i].includes('B')){
        if(cursor > 1){
            cursor = cursor - 1;
            startStr.splice(cursor,1);
            if(cursor < 0){
                cursor = 0;
            }
        }else if(cursor < 0) {
            cursor = 0;
        }else if(cursor == 0){
            if(startStr.length !== 1){
                startStr.splice(0,1);
            }else{
                startStr = startStr;
            }
        }else if(cursor == 1){
            startStr.splice(cursor-1,1)
        }else{
            startStr.splice(cursor-1,1)
        }
    }
    startStr = startStr.join('').split('');
    console.log(startStr, cursor);
    if(cursor == 0){
        cursor = 0;
    }else if(cursor < 0){
        cursor = 0;
    }else if(command[0] == 'B' && cursor > 1){
        cursor = cursor;
    }else{
        cursor += 1;
    }
   };
   console.log(startStr.join(''));
};
editior(string);
console.timeEnd()