var tbody = d3.select("tbody");
//Build the table
data.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
//searchFields = ['datetime']//,'city','state','country','shape']

//Define the button
var button = d3.select("#filter-btn")
button.on("click", runEnter)


//Function for searching
function runEnter(){
    d3.event.preventDefault();
    tbody.html("");
    // This is how I'd like to do it, but something with the line.currSearch doesnt work how I expect
    // var filteredValues = data
    // for ( var i = 0; i < searchFields.length; i++) {
    //   var currSearch = `${searchFields[i]}`
    //   var selection = `#${currSearch}`
    //   var inputText = d3.select(selection).property("value")
    //   console.log(`Now searching on the ${currSearch} form for ${inputText}`)
    //   var currFilteredValues = filteredValues.filter(line => line.currSearch === inputText);
    //   console.log(`${currFilteredValues.length} found for ${currSearch}`)
    //}
    //Get the filterboxes
    var datetimeFilter = d3.select("#datetime").property("value")
    var cityFilter = d3.select("#city").property("value")
    var stateFilter = d3.select("#state").property("value")
    var countryFilter = d3.select("#country").property("value")
    var shapeFilter = d3.select("#shape").property("value")
    console.log(`Searching for ${datetimeFilter} ${cityFilter} ${stateFilter} ${countryFilter} ${shapeFilter}`)
    if (datetimeFilter) {var filteredValues = data.filter(line => line.datetime === datetimeFilter) ; console.log(filteredValues.length)}
    if (cityFilter) {var filteredValues = filteredValues.filter(line => line.city === cityFilter) ; console.log(filteredValues.length)}
    if (stateFilter) {var filteredValues = filteredValues.filter(line => line.state === stateFilter) ; console.log(filteredValues.length)}
    if (countryFilter) {var filteredValues = filteredValues.filter(line => line.country === countryFilter) ; console.log(filteredValues.length)}
    if (shapeFilter) {var filteredValues = filteredValues.filter(line => line.shape === shapeFilter) ; console.log(filteredValues.length)}
    console.log(`Final search found ${filteredValues.length}`)
    filteredValues.forEach((entry => {
        var row = tbody.append("tr");
        Object.entries(entry).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    }));
};
