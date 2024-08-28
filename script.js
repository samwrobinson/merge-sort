const complexArray = [
    [34, 67, [99, 23], 10],
    42, [87, 65],
    56, 13, [76, 1, [4, 19], 88],
    7, 84, 98, 55,
    [17, 25], 90, 32, 53,
    2, [47, 26, [91, 62], 3],
    79, 39, 66, [43, 12],
    30, 14, 86, [28, 35, [73, 8]],
    50, 92, 24, [78, 20],
    18, [74, 41, [11, 69]],
    63, 6, 93, [82, 15],
    9, [100, 59, [48, 36]],
    21, [77, 44, [38, 70]],
    5, [81, 31, [45, 57]],
    60, 49, 83, [22, 58],
    [33, 89, [54, 64], 85],
    46, [27, 37, [40, 61]],
    75, [16, 71, [52, 68]],
    80, 29, 95, [72, 94],
    [51, 97, [96, 58], 99],
    3, [19, 93, [13, 56]],
  ];
  


function mergeSort(array) {
    // Find index to split from
    let index = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, index);
    let rightHalf = array.slice(index, array.length);

    if (array.length === 1) return array;

    const sortedLeftArray = mergeSort(leftHalf);
    const sortedRightArray = mergeSort(rightHalf);

    return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftHalf, rightHalf) {
    let sortedArray = [];
    leftIndex = 0;
    rightIndex = 0;

    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
        if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
            sortedArray.push(leftHalf[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(rightHalf[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftHalf.length) {
        sortedArray.push(leftHalf[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightHalf.length) {
        sortedArray.push(rightHalf[rightIndex]);
        rightIndex++
    }
    return sortedArray;
}

console.log(mergeSort(complexArray));