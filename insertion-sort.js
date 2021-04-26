function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let item = array[i];
        let j = i;

        while (j > 0 && array[j - 1] > item) {
            array[j] = array[j - 1];
            j--;
        }

        array[j] = item;
    }
    return array;
}

console.log(insertionSort([5, 2, 11, 14, 53, 12, 19]));
console.log(insertionSort([7, 9, 31, 28, 4, 19, 1]));
console.log(insertionSort([11, 32, 43, 2, 15, 13, 16]));