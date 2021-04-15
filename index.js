function superbowlWin(array) {

    let found = array.find( value => value.result === "W")
      
    if (found) {
        return found.year;
    }
}

//THESE DONT WORK
// function superbowlWin(array) {
//     let found = array.find( value => {
//         if(value.result === "W") {
//             return value.year
//         }
//     })
//       return found;
// }


// function superbowlWin(array) {
//     let found = array.find( value => {
//         if(value.result === "W") {
//             return true
//         }
//     })
//       return found.year;
// }