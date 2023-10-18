function decimalToBinary(num) {
	let a="";
  while(num>0){
	  if(num%2==0){
		  a=0+a;
		  num=parseInt(num/2);
		  console.log(num);
	  }
	  else{
		  a=1+a
		  num=parseInt(num/2);
		  console.log(num);
	  }
	  if(num==1){
	      a=1+a;
	      return a;
	  }
  }
}

window.decimalToBinary = decimalToBinary;
