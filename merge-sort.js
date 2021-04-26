function mergeSort(arr) {
    let len = arr.length;
    if (len < 2)
        return arr;
    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);

    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        }
        else {
            result.push(right[r++]);
        }
    }


    //remaining part needs to be addded to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort([5, 2, 11, 14, 53, 12]));
console.log(mergeSort([7, 9, 31, 28, 4, 19]));
console.log(mergeSort([11, 32, 43, 2, 15, 13]));