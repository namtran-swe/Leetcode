/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const dictionary = new Map();

    for(let i = 0; i < magazine.length; i++) {
        let m = magazine.charAt(i);
        
        let currentCount = dictionary.get(m);
        if (currentCount == undefined) {
            currentCount = 0;
        }
        
        dictionary.set(m, currentCount + 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let r = ransomNote.charAt(i);
        let currentCount = dictionary.get(r);

        if (currentCount == 0 || currentCount == undefined) {
            return false;
        }

        dictionary.set(r, currentCount - 1);
    }

    return true;
};

//Runtime: 77ms
//Memory: 51.7 MB