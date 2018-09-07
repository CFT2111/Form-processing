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
//answers to questions 1-4
function processTheForm(){
  const userName = document.getElementById("username").value;
  const continent = document.getElementById("continent").value;
  const matchingCountries = countries.filter(function(country){
    if(country.continent == continent){
      return true;
    }
    return false;
  })
  console.log(`${userName}, here is a list of countries:`)
  matchingCountries.forEach(function(country){
    console.log(country.name);
  })
}

const btn  = document.getElementById("formBtn");
btn.addEventListener("click",function(){
  processTheForm()
})

const selectMenu  = document.getElementById("continent");
selectMenu.addEventListener("change",function(){
  processTheForm()
})
*/

/*
5. If you have got the above to work, think how you have organised and structured your code. It would probably be a good idea to have something like the following (main would be called from the event listener function). Re-factor yuor code to use a number of different functions.
*/


function getUserName(){
    const userName = document.getElementById("username").value;
  return userName;
}
function getContinent(){
    const continent = document.getElementById("continent").value;
  return continent;
}
function filterCountries(continent){
    const matchingCountries = countries.filter(function(country){
    if(country.continent == continent){
      return true;
    }
    return false;
  })
  return matchingCountries
}
function displayResults(userName, matchingCountries){
  if(matchingCountries.length>0){
      console.log(`${userName}, here is a list of countries:`)
      matchingCountries.forEach(function(country){
        console.log(country.name);
      })
  }else{
    console.log(`${userName}, no countries match`)
  }
    
}
function main(){
    const userName = getUserName();
    const continent = getContinent();
    const matchingCountries = filterCountries(continent);
    displayResults(userName, matchingCountries);
}

const btn  = document.getElementById("formBtn");
btn.addEventListener("click",function(){
  main()
})

const selectMenu  = document.getElementById("continent");
selectMenu.addEventListener("change",function(){
  main()
})