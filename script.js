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

    // console.log("name list: ", list);

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
        console.log("taking front half: ", list);
    } else if ( list[indexHalf] < name ) {
        // list = list.splice(indexHalf + 1, list.length - indexHalf - 1);
        list = list.slice(indexHalf + 1);
        console.log("taking back half: ", list);
    };

    binarySearch(list, name);
};


// Using while loop
// const binarySearch = (list, name) => {

//     // let list = list2.slice(0);
//     // console.log("nameList: ", nameList);

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
//             list = list.slice(0, indexHalf);
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
binarySearch(nameList, 'Aaron');//=> true













