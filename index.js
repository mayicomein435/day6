console.log("countries having population less than 200000")
fetch("https://restcountries.com/v3.1/all")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const filteredCountries = data.filter(country => {
        return country.population < 200000;
      });  
      console.log(filteredCountries);
    })

    console.log("by using for each print country name,capital")
    fetch("https://restcountries.com/v3.1/all")
    .then(response => {
      return response.json();
    })
    .then(data => {    
        data.forEach(country => { 
          console.log(country.name.common);
          console.log(country.capital); 
          console.log(country.flag); 
          
        });
    })

console.log("which countries having asia as continent")
function fetchAndFilterCountries(property, value) {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => {
        
        return response.json();
      })
      .then(data => {
        // Filter countries based on the specified property and value
        const filteredCountries = data.filter(country => country[property] === value);
  
        
        console.log(filteredCountries);
      })
      .catch(error => {
        console.error('Error fetching or parsing data:', error);
      });
  }
  fetchAndFilterCountries('region','Asia')
  



console.log("find population by using reduce function")
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Extract population of each country
    const populations = data.map(country => country.population);

    // Use reduce function to get the total population
    const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);

    console.log('Total population:', totalPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));

 
