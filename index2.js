//Function that returns 'Fizz', 'Buzz' ,'Fizz Buzz' or the number given depending of if its divisible by 3, 5 or

function fizzBuzz(num){
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
}

console.log(fizzBuzz(5)); 