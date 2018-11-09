const nameList = [
    'Aaron',
    'Andy',
    'Batman',
    'Betsy',
    'Boba',
    'Bonnie',
    'Clarence',
    'Daisy',
    'Elektra',
    'Flash',
    'Zoro'
];

// Using recursion
function binarySearch(list, name) {

    let indexHalf = Math.floor(list.length / 2);

    if (list.length === 1 && list[0] != name) {
        console.log("false");
        return false;
    } else if (list[indexHalf] === name) {
        console.log("true");
        return true;
    } else if ( list[indexHalf] > name ) {
        // list = list.splice(0, indexHalf);
        list = list.slice(0, indexHalf);
        console.log("front", list)
    } else if ( list[indexHalf] < name ) {
        // list = list.splice(indexHalf + 1, list.length - indexHalf - 1);
        list = list.slice(indexHalf + 1);
        console.log("back", list)
    };

    binarySearch(list, name);
};


// Using while loop
// const binarySearch = (list, name) => {

//     console.log("sorting list: ", list);

//     while (true) {

//         let indexHalf = Math.floor(list.length / 2);

//         if (list.length === 1 && list[0] != name) {
//             console.log("false");
//             return false;
//         } else if (list[indexHalf] === name) {
//             console.log("true");
//             return true;
//         } else if ( list[indexHalf] > name ) {
//             // list = list.splice(0, indexHalf);
//             list = list.slice(0, indexHalf)
//             console.log("front", list)
//         } else if ( list[indexHalf] < name ) {
//             // list = list.splice(indexHalf + 1, list.length - indexHalf - 1);
//             list = list.slice(indexHalf + 1);
//             console.log("back", list)
//         };
//     };
// };



binarySearch(nameList, 'Daisy');//=> true
binarySearch(nameList, 'Aaron');//=> true
binarySearch(nameList, 'Bruce'); //=> false












