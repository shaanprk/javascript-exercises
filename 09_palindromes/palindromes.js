const palindromes = function (string) {
    string = string.replace(/[!,\s.]/g,'').toLowerCase();
    console.log(string);
    let revStr = string.split("").reverse().join("");
    if (string == revStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
