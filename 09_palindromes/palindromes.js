const palindromes = function (str) {
    str = removePunc(str);
    var arr = str.split('');
    var reverseArr = [];
    for (var i = arr.length - 1; i >= 0; i --) {
        reverseArr.push(arr[i]);
    };


    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== reverseArr[i]) {
            return false;
        }

    }
    return true;


};

function removePunc(str) {
    str = str.trim();
    str = str.replaceAll(/\s/g,'');
    str = str.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    str = str.toLowerCase();

    return str;
}

// Do not edit below this line
module.exports = palindromes;
