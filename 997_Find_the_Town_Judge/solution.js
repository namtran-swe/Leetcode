/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let likesCount = {};
    let isLikedCount = {};
    let judge = 0;

    for (let i = 0; i <= n; i++) {
        likesCount[i] = 0;
        isLikedCount[i] = 0;
    }

    for (let t of trust) {
        likesCount[t[0]]++;
        isLikedCount[t[1]]++;
    }

    for (key in likesCount) {
        if (likesCount[key] === 0) {
            judge = key;
        }
    }

    if (isLikedCount[judge] === n - 1) {
        return judge;
    } else {
        return -1;
    }
};

//Runtime: 76ms
//Memory: 57.3 MB