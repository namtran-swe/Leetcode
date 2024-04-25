/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = [];

    for (let i = 1; i <= n; i++) {
        let divisibleBy3 = i % 3 == 0;
        let divisibleBy5 = i % 5 == 0;

        if (divisibleBy3 && divisibleBy5) {
            answer.push("FizzBuzz");
        } else if (divisibleBy3) {
            answer.push("Fizz");
        } else if (divisibleBy5) {
            answer.push("Buzz");
        } else {
            answer.push(i.toString());
        }
    }
    return answer;
};

//Runtime: 55ms
//Memory: 51.3 MB