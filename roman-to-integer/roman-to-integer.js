/**
 * @param {string} s
 * @return {number}
 */

let romanConverter = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
};

var romanToInt = function(s) {
    return [...s].reduce( (accum, symb, i) => {
        if (romanConverter[symb] < romanConverter[ s[i+1] ]) {
            return accum - romanConverter[symb]
        }else {
            return accum += romanConverter[symb]
        }
    }, 0)
};