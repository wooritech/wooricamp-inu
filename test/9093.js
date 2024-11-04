function reverse(input) {
    const split = input.split('\n');
    const strLength = split[0];
    const reversedSentences = [];

    for (let i = 1; i <= strLength; i++) {
        const words = split[i].split(' ');
        const reversedWords = [];
        for (let j = 0; j < words.length; j++) {
            reversedWords.push([...words[j]].reverse());
        }
        reversedSentences.push(reversedWords);
    }
    const combinedArrays = reversedSentences
        .map((subArray) => subArray.map((innerArray) => innerArray.join('')).join(' '))
        .join('\n');

    return combinedArrays;
}
module.exports = reverse;
