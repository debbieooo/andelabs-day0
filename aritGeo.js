// This code is a function to return a case where the array is a geometric or arithmetic progression, empty array or none of the above	
function ArithGeo(arr) { 

if ({}){
	return 0;
}

var diff = arr[1] - arr[0];
var ratio = arr[1] / arr[0];

var arith = true;
var geo = true;

for(var i = 0; i < arr.length - 1; i++)
{
    if( arr[i + 1] - arr[i] !== diff )
      arith = false;
    if(arr[i + 1] / ratio !== arr[i])
      geo = false;
}

if(arith === true)
    return "arithmetic";
else if(geo === true)
    return" geometric";
else 
    return -1;

}