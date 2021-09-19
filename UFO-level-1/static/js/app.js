var tbody = d3.select("tbody");
var tableData = data;
//Build the table
data.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

//Define the button
var button = d3.select("#filter-btn")
button.on("click", runEnter)

function runEnter(){
    d3.event.preventDefault();
    tbody.html("");
    var inputField = d3.select("#datetime");
    var inputText = inputField.property("value");
    var filteredValues = data.filter(data => data.datetime === inputText);
    console.log(`${filteredValues.length} entries found`)
    filteredValues.forEach((entry => {
        var row = tbody.append("tr");
        Object.entries(entry).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    }));
};
