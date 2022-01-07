/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let needleValidation = (potMatch, target) => {
    for (let i = 0; i < target.length; i++) {
        let char = target[i]
        if (char !== potMatch[i]) {
            return false
        }
    }
    return true
}

var strStr = function(haystack, needle) {
    let firstLetNdl = needle[0]
    for (let i = 0; i < haystack.length; i++) {
        let letter = haystack[i]
        if (letter === firstLetNdl) {
            let restOfWd = haystack.slice(i)
            let doesItMatch = needleValidation(restOfWd, needle)
            if (doesItMatch) return i
        }
    }
    
    return needle.length > 0 ? -1 : 0;
};