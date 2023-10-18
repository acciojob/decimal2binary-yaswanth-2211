function decimalToBinary(num) {
	let a="";
  while(num>=0){
      if(num==0){
	      a=a+0;
	      return a.split("").reverse().join("");
	  }
	  else if(num==1){
	      a=a+1;
	      return a.split("").reverse().join("");
	  }
	  else if(num%2==0){
		  a=a+0
		  num=num/2;
		  num=parseInt(num/2);
	  }
	  else{
		  a=a+1
		  num=parseInt(num/2);
		  console.log(num);
	  }
  }
}

window.decimalToBinary = decimalToBinary;
