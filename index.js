function findMinMax(arr){

	var len =arr.length

	while(len--){
		if(arr[len]){
			min = arr[len];
		}

		if(arr[len]>max){
			max=arr[len];
		}
	}

	var arraynew ={}
	arraynew[0]=min;
	arraynew[1]=max;

	return arraynew;
}
arr=[3,4,5,6,7,8,4,3,5,15];
findMinMax(arr)