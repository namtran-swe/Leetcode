/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            answer.push("FizzBuzz");
        } else if (i % 3 == 0) {
            answer.push("Fizz");
        } else if (i % 5 == 0) {
            answer.push("Buzz");
        } else {
            answer.push(i.toString());
        }
    }
    return answer;
};

//Runtime: 54ms
//Memory: 52.4 MB