function findMinMax(arr){

	var len = arr.length, min = Infinity, max = -Infinity;
  while (len--) {
    if (Number(arr[len]) < min) {
      min = Number(arr[len]);
    }

    if (Number(arr[len]) > max) {
      max = Number(arr[len]);
    }


  }
  newarray =[];

  newarray.splice(0,0,min,max);

  return newarray;
}
arr=[3,4,5,6,7,8,4,3,5,15];
console.log(findMinMax(arr))