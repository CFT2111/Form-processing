
function processForm(){
 	const correctRdioBtn=document.querySelector("#caracas");
	if(correctRdioBtn.checked){
		console.log("You are correct");
	}else{
		console.log("You are wrong");
	}
};

const btn =  document.querySelector("#myButton");

btn.addEventListener("click",function(){
	processForm();
})
