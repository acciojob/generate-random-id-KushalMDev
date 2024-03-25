function makeid(l) {
  // write your code here
	// our code here
    let arr=[65,97]
    let digits=[0,1,2,3,4,5,6,7,8,9]
    let res=''
    for(let j=0;j<l;j++){
        let random=parseInt(Math.random()*26)
        // console.log(random);
        if(random<9){
           let num =digits[random]
           res+=num
        }
        else{
            let ind=parseInt(Math.random()*2)
            let c=String.fromCharCode(arr[ind]+random)
            res+=c;
        }
    }
    return res
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
