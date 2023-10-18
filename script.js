function decimalToBinary(num) {
  //Write you code here
	let sum=0;
  for(i=0;i++;i<num.length){
	  sum=sum+(Math.pow(2,i))*num.charAt(num.length-i);
  }
}

window.decimalToBinary = decimalToBinary;
