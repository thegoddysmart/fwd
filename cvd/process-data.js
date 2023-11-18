
// this updates the table with the country's data
function createCountryRow(country, stat) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${country.country}</td>
      <td>${stat.time}</td>
      <td>${stat.cases}</td>
      <td>${stat.deaths}</td>
      <td>${stat.recoveries}</td>
    `;
    return row;
  }
  
  // this displays data in the table
  function displayData(covidData) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
  
    covidData.forEach((country) => {

      let totalCases = 0;
      let totalDeaths = 0;
      let totalRecoveries = 0;
  
      country.statistics.forEach((stat) => {
        const row = createCountryRow(country, stat);
        tableBody.appendChild(row);
  
        // total cases, deaths, and recoveries for each country
        totalCases += stat.cases;
        totalDeaths += stat.deaths;
        totalRecoveries += stat.recoveries;
      });
  
      // a row for displaying the overall total
      const totalRow = createTotalRow('Total', totalCases, totalDeaths, totalRecoveries);
      tableBody.appendChild(totalRow);
    });
  }
  
  // displays total cases, deaths, and recoveries for a country
  function createTotalRow(countryName, totalCases, totalDeaths, totalRecoveries) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${countryName}</td>
      <td>Total</td>
      <td>${totalCases}</td>
      <td>${totalDeaths}</td>
      <td>${totalRecoveries}</td>
    `;

    // I want to let the row stand out
    row.style.background = 'rgba(113, 99, 186, 1)';
    // row.style.color = 'white';

    const tdElements = row.querySelectorAll('td');
    tdElements.forEach(td => {
        td.style.color = 'white';
    });

    

    return row;
  }


  export default {
    createCountryRow,
    displayData,
  };












