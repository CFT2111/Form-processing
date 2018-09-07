
class Country {
  constructor(name, capital, continent, population) {
    this.name = name;
    this.capital = capital;
    this.continent = continent;
    this.population = population;
  }
  getFullDetails(){
   return `${this.name} is a country in ${this.continent}. The capital city of ${this.name} is ${this.capital}. ${this.name} has a population of ${this.population}.`
  }

}

const countries=[];
countries.push(new Country( "England","London", "Europe", 53000000));
countries.push(new Country( "USA","Washington", "N. America", 321000000));
countries.push(new Country( "France","Paris", "Europe", 66900000));
countries.push(new Country( "Japan","Tokyo", "Asia", 127000000));


/*
1) 
a) Write a some JavaScript code that uses document.getElementById to grab hold of the button in the HTML page. Use a console.log message to check this has worked. 
b) Add a click event listener to the button. Again use a simple console.log message to check this has worked.
*/

/*
2) Next try and do some form processing. Start with the text box. 
a) Can you get whatever the user has typed into the text box to appear in the console. 
b) Can you also display the user's choice of continent in the console.
*/

/*
3) At the top of this file is some code that creates an array of Country objects. Can you use the user's choice of continent to display matching countries from this array e.g. if the user selects 'Europe' the details for England and France should be displayed in the console.
*/

/*
4. Can you add code that listens for a 'change' event on the select menu. Whenever the user selects a different continent the list of matching countries in the console should change.
*/

/*
5. If you have got the above to work, think how you have organised and structured your code. It would probably be a good idea to have something like the following (main would be called from the event listener function). Re-factor yuor code to use a number of different functions.

function getUserName(){
	//code to get the username and return it
}
function getContinent(){
	//code to get the continent and return it
}
function filterCountries(continent){
	//code to filter the array of countries and return the result
}
function displayResults(userName, matchingCountries){
	//code to display the details of the matching countries in the console
}
function main(){
	const userName = getUserName();
	const continent = getContinent();
	const matchingCountries = filterCountries(continent);
	displayResults(userName, matchingCountries);
}
*/