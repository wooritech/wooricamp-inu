function reverse(input) {
    const split = input.split('\n');
    const strLength = split[0];
    const reversedSentences = [];

    for (let i = 1; i <= strLength; i++) {
        const words = split[i].split(' ');
        const reversedWords = [];
        for (let j = 0; j < words.length; j++) {
            reversedWords.push([...words[j]]);
        }
        reversedSentences.push(reversedWords);
    }
    for (let i = 0; i < reversedSentences.length; i++) {
        for (let j = 0; j < reversedSentences[i].length; j++) {
            reversedSentences[i][j] = reversedSentences[i][j].reverse();
        }
    }
    const combinedArrays = reversedSentences
        .map((subArray) => subArray.map((innerArray) => innerArray.join('')).join(' '))
        .join('\n');

    return combinedArrays;
}
module.exports = reverse;
