/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let townsPeople = {};
    let whoVoted = {};
    for (let i = 1; i <= n; i++ ) {
        townsPeople[i] = 0;
    }
    
    for (let i = 0; i < trust.length; i++) {
        let person = trust[i][0]
        let potentialJudge = trust[i][1]
        townsPeople[potentialJudge]++
        whoVoted[person] = 0
    }
    
    for (let person in townsPeople) {
        if ( (townsPeople[person] === n - 1) && (whoVoted[person] === undefined)) {
            return person
        }
    }
    return -1
};

//if the town judge trusts no one, they would never be in the 0th position os the tuple. 
//if everyone trusts the town judge, then the town judge would always have the highest 1st position in the tuple 
//create object
// create key pairs in a for loop where obj[i] = 0 
//iterate over array 
//tally those that are in the 0th position 
//iterate over object
//whichever number's value stays at 0 is the judge otherwise return -1