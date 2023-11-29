function processForm(){
 	const price = selectMenu.value;
	console.log(price);
};

const selectMenu =  document.querySelector("#flavours");
selectMenu.addEventListener("change",function(){
  	processForm();
})

