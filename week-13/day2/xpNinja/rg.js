function returnNumbers(string) {
    const digits = string.match(/\d/g);
    return digits.join('');
}

function returnVal(name) {
    if (/^[A-Z][a-z]*\s[A-Z][a-z]*$/.test(name)) {
       return true;
        } else
        {
        return false;
      }
    }


    module.exports = {
        returnNumbers,
        returnVal
    }
    