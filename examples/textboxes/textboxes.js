

function processForm(){
	const searchTerm=document.querySelector("#search").value;
	console.log(`You entered ${searchTerm}`)
}


const btn =  document.querySelector("#myButton");


btn.addEventListener("click",function(){
	processForm();
})
