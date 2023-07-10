const getTheTitles = function(books) {
    bookNames = [];

    for (titles in books) {
        bookNames.push(books[titles].title);
    }

    return bookNames;


};

// Do not edit below this line
module.exports = getTheTitles;
