function chess(input) {
    const formatArr = ['1', '1', '2', '2', '2', '8'];
    const split = input.split(' ');
    const count = 6;
    const newArr = [];
    for (let i = 0; i < count; i++) {
        newArr[i] = Number(formatArr[i]) - split[i];
    }
    return newArr.join(' ');
}
module.exports = chess;
