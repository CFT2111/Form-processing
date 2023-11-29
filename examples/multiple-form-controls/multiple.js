

function getSearchTerm(){
	const searchTerm=document.querySelector("#search").value;
	return searchTerm;
};

function checkTerms(){
	const termsChkBox=document.querySelector("#terms");
	return termsChkBox.checked;
}

function getAnswer(){
 	const selectedRadBtn=document.querySelector('input[name="question"]:checked');
	return selectedRadBtn.value;
};

function processForm(){
	const searchTerm =  getSearchTerm();
	const termsAndConditions = checkTerms();
	const answer = getAnswer();
	console.log(searchTerm);
	console.log(termsAndConditions);
	console.log(answer);
}



const btn =  document.querySelector("myButton");

btn.addEventListener("click",function(){
	processForm();
})
