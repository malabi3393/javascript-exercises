const removeFromArray = function(array, ...elements) {
    newArray = [];

   
    for (let i = 0; i < array.length; i++) {
        if (elements.inexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
