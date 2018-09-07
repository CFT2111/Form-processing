

function processForm(){
 	const price=document.getElementById("flavour").value;
	console.log(price); // e.g. £2.30
	const id=document.getElementById("flavour").selectedIndex;
	const options=document.getElementById("flavour").options;
	console.log(options[id].textContent); // e.g. Strawberry
};


const btn =  document.getElementById("myButton");

btn.addEventListener("click",function(){
	processForm();
})
