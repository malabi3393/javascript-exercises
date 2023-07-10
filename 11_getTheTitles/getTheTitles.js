const getTheTitles = function(books) {
    bookNames = [];

    for (titles in books) {
        bookNames.push(books[titles].title);
    }

    return bookNames;


};

// Do not edit below this line
module.exports = getTheTitles;


// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ];

// var bookNames = [];

// for (titles in books) {
//     console.log(books[titles].title);
//     bookNames.push(titles.title);
// }

// console.log(bookNames);

// console.log(books[0].author);