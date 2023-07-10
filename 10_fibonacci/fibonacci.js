const fibonacci = function(n) {
    // var n = 4;

    if (n < 0) {
        return "OOPS";
    }

    n = Number(n);
    var fib = 0;

    var arr = [1, 1];

    if (n === 1 | n === 2) {
        return 1;
        // console.log(1);
    }
    var i = 3;
    do {
        // console.log(fib);
        // console.log(arr[arr.length - 1]);
        fib = arr[arr.length - 2] + arr[arr.length - 1];
        // console.log(fib);
        arr.push(fib);


        i++;
    } while(i !== n +1);
    // console.log(arr);
    return fib;
    

};

// Do not edit below this line
module.exports = fibonacci;


// var n = 6;
// var fib = 0;

// var arr = [1, 1];

// if (n === 1 | n === 2) {
//     // return 1;
//     console.log(1);
// }
// var i = 3;
// while (i !== n) {
//     console.log(fib);
//     // console.log(arr[arr.length - 1]);
//     fib = arr[arr.length - 2] + arr[arr.length - 1];
//     console.log(fib);
//     arr.push(fib);


//     i++;
// }
// // return fib;
// console.log(arr);