

module.exports= {

//Function to return Maximum and Minimum values in a new array

findMinMax: function(arr){

  
 max=Math.max(...arr);
 min = Math.min(...arr);
  

   newarray =[];

  if(max == min){

    newarray[0]=max;

    return newarray;


    }
 else{

  newarray.splice(0,0,min,max);

  return newarray;

 }

},



//Function that returns 'Fizz', 'Buzz' ,'Fizz Buzz' or the number given depending of if its divisible by 3, 5 or neither

fizzBuzz: function(num){
   

  if(num<0){
    return 'Invalid'
  }
  if (num%3==0 && num%5==0){
    
      return 'FizzBuzz';
    }

  else if(num%3==0){
    return 'Fizz';
  }

  else if(num%5==0){
    return 'Buzz';
  }


  else{
    return num;
  }

},


  
aritGeo: function(arr) { 

if(arr.length==0){

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
    return "Arithmetic";
else if(geo === true)
    return"Geometric";
else {
    return -1;
}

}





}



