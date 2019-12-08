const binarySearch = (sortedArr, searchKey) => {

    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] === searchKey) {
            return i; 
        }
        return -1; 
     
    }
};

console.log(binarySearch([2, 4, 5, 6], 9));
