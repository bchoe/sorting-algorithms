function qSort(arr){
  let leftArr = [];
  let rightArr = [];
  let pivot = arr[0];

  if(arr.length <= 1){
   return arr;
  } else {

    for (let i = 1; i < arr.length; i++){

      if(arr[i] < pivot){

         leftArr.push(arr[i]);

      } else {

         rightArr.push(arr[i]);

      }
    }
  }
  //console.log(qSort(arr));
  //return qSort((leftArr).conpivot + qSort(rightArr));
  //return qSort(arr);
  return qSort(leftArr).concat(pivot, qSort(rightArr));
}

module.exports = qSort;
//console.log(qSort([5,4,6,3,7,2]));
//qSort([5,4,6,3,7,2,8,1,9]);
