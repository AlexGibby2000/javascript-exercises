const reverseString = function(string) {
    let revstr="";
    for(let i=string.length-1;i>=0;i--){
        revstr+=string.charAt(i);
    }
    return revstr;
};

// Do not edit below this line
module.exports = reverseString;
