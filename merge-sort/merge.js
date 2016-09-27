function mergeSort(arr){

let middleArr = arr.length / 2;
let leftArr = [];
let rightArr = [];
 if(arr.length <= 1){
    return arr;
  }
/*divide the list recursively into
two halves until it can no more be divided.*/

  for (let l = 0; l < Math.ceil(middleArr); l++){
    leftArr.push(arr[l]);

  }

//Math.ceil(middleArr)

  for (let r = Math.ceil(middleArr); r < arr.length; r++){
    rightArr.push(arr[r]);

  }

/* if it is only one element in the list
  it is already sorted, return*/

return mergeHelper(mergeSort(leftArr), mergeSort(rightArr));

/*merge the smaller lists into
new list in sorted order.*/

  function mergeHelper(left, right){

  let result = [];

    while(left.length > 0 || right.length > 0){

      if(left[0] < right[0]){
        result.push(left[0]);
        left.shift();

      } else if (left[0] < right[0]){
        result.push(right[0]);
        right.shift();

      } else if (left.length === 0){
        result.push(right[0]);
        right.shift();

      } else if (right.length === 0){
        result.push(left[0]);
        left.shift();
      }

    }
    console.log(result);

  return result;

  }

}
console.log(mergeSort([6,5,4,2,1,3]));
