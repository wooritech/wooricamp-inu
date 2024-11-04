function editor() {
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
}
