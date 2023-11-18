// import './style.css'
import covidData from './covid-data.js'
import processData from './process-data.js'


// Let's call the functions from process-data.js
processData.displayData(covidData);


// Getting the elements for filtering
const countryFilterInput = document.getElementById('filter-input');
const monthSelect = document.getElementById('filter-month');
const yearSelect = document.getElementById('filter-year');

// Adding input event listeners to the fields
countryFilterInput.addEventListener('input', handleFilter);
monthSelect.addEventListener('change', handleDateFilter);
yearSelect.addEventListener('change', handleDateFilter);


// Function to handle country filtering
function handleFilter() {
  // Convert all lowercase
  const countryFilter = countryFilterInput.value.toLowerCase();
  
  // Filter the countries by name
  const filteredData = covidData.filter((country) => {
    return country.country.toLowerCase().includes(countryFilter);
  });
  
  // Display the filtered data
  processData.displayData(filteredData);
}

// Function to handle date filtering
function handleDateFilter() {
    // Selected month and year values
    const selectedMonth = parseInt(monthSelect.value);
    const selectedYear = parseInt(yearSelect.value);

    // Filtering the data....
    const filteredData = covidData.map((country) => {
        return {
            country: country.country,
            statistics: country.statistics.filter((stat) => {
                const statDate = new Date(stat.time);
                return (
                    (selectedMonth === 0 || statDate.getUTCMonth() + 1 === selectedMonth) &&
                    (selectedYear === 0 || statDate.getUTCFullYear() === selectedYear)
                );
            }),
        };
    });

    // Display the filtered data
    processData.displayData(filteredData);
}



// When "All" selected, what to do
function initializeDateFilter() {
    monthSelect.value = "0";
    yearSelect.value = "0";
}

initializeDateFilter();

























// ================== SORTING ==================



// Getting the header cells
const casesHeader = document.getElementById("cases-header");
const deathsHeader = document.getElementById("deaths-header");
const recoveriesHeader = document.getElementById("recoveries-header");

// Adding data-sorting-order attribute to header cells
casesHeader.setAttribute("data-sorting-order", "asc");
deathsHeader.setAttribute("data-sorting-order", "asc");
recoveriesHeader.setAttribute("data-sorting-order", "asc");

// casesHeader.addEventListener("click", () => handleSort(casesHeader));
// deathsHeader.addEventListener("click", () => handleSort(deathsHeader));
// recoveriesHeader.addEventListener("click", () => handleSort(recoveriesHeader));



// Testing
casesHeader.addEventListener("click", () => {
  console.log("Cases header clicked");
  handleSort(casesHeader);
  console.log("Cases was sorted");
});
deathsHeader.addEventListener("click", () => {
  console.log("Deaths header clicked");
  handleSort(deathsHeader);
});
recoveriesHeader.addEventListener("click", () => {
  console.log("Recoveries header clicked");
  handleSort(recoveriesHeader);
});


// this is the handleSort function
function handleSort(column) {
  console.log("Data before sorting:", covidData); //just for testing - to be removed
  const sortingOrder = column.getAttribute('data-sorting-order');
  let allSortedStats = [];
  const sortedData = covidData.map((country) => {
    const sortedStats = [...country.statistics];

    console.log("sortedStats after mapping:", sortedStats); //just for testing - to be removed

    if (sortingOrder === 'asc') {
      sortedStats.sort((a, b) => a[column.id] - b[column.id]);
      column.setAttribute('data-sorting-order', 'desc');
    } else {
      sortedStats.sort((a, b) => b[column.id] - a[column.id]);
      column.setAttribute('data-sorting-order', 'asc');
    }

    allSortedStats = allSortedStats.concat(sortedStats);
  });

  console.log("Data after sorting:", sortedData); //just for testing - to be removed

  // this will display the sorted data
  // processData.displayData(sortedData);
  processData.displayData([{ country: 'All', statistics: allSortedStats }]);
}
