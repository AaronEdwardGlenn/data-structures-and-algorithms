let insertShiftArray = function(arr, num){
    const half = Math.ceil(arr.length / 2);
    let newArr = [];
    let theDex = 0;
    let theDex2 = half + 1;
    for (let i = 0; i < half; i++) {
        newArr[theDex] = arr[i];
        theDex++;
    }
    newArr[half] = num;
    for (let j = half; j < arr.length; j++) {
        newArr[theDex2] = arr[j];
        theDex2++;
    }
    return newArr;
};
let arr1 = [1, 2, 3, 4, 5, 6, 7, 7, 7];
console.log(insertShiftArray(arr1, 9));