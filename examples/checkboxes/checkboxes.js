
function processForm(){
	const termsChkBox=document.querySelector("#terms");   
 	if(termsChkBox.checked){
           console.log("You have agreed to the terms and conditions");
   	}else{
   	   console.log("You don't agree");
   	}
}



const btn =  document.querySelector("#myButton");

btn.addEventListener("click",function(){
	processForm();
})
