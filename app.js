// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

function initialTable(data){
    data.forEach(function(uforeport){
        var row = tbody.append("tr");
        Object.entries(uforeport).forEach(function([key, value]){
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

var submit = d3.select("#filter-btn");

submit.on("click", function(){
    var row = d3.select("tbody").selectAll("td");
    row.remove();
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    console.log(inputElement);
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData;
    var filtered = filterData.filter(tbody => tbody.datetime == inputValue);
    console.log(filtered);
    initialTable(filtered)
});

initialTable(tableData)