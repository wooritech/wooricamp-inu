function palindrome(input) {
    const split = input.split('');
    const reverseStr = split.reverse().join('');

    if (input === reverseStr) {
        return 1;
    } else {
        return 0;
    }
}

module.exports = palindrome;
