
function quickSort(array) {
    if(array.length <= 1) return array;

    let left = [];
    let right = [];
    let pivotIndex = Math.floor(array.length /2);
    let pivot = array.splice(pivotIndex, 1)[0];


    for(let i = 0; i< array.length; i++) {
        if(array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));

}


