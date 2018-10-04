
function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);             
}

function processData(csv) {
	var allTextLines = csv.split(/\r\n|\n/);
	var lines = [];
	while (allTextLines.length) {
		lines.push(allTextLines.shift().split(';'));
	}
	data = lines;
	data = transpose();
	console.log(data);
	drawOutput();
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Cannot read file !");
	}
}

function transpose (){
	// Calculate the width and height of the Array
	var w = data.length || 0;
	var h = data[0] instanceof Array ? data[0].length : 0;

	// In case it is a zero matrix, no transpose routine needed. 
	if(h === 0 || w === 0) { 
		return []; 
	}

	/**
	* @var {Number} i Counter
	* @var {Number} j Counter
	* @var {Array} t Transposed data is stored in this array.
	*/
	var i, j, t = [];

	// Loop through every item in the outer array (height)
	for(i=0; i<h; i++) {

		// Insert a new row (array)
		t[i] = [];

		// Loop through every item per item in outer array (width)
		for(j=0; j<w; j++) {

			// Save transposed data.
			t[i][j] = data[j][i];
		}
	}
	return t;
}

function drawOutput(){
	//Clear previous data
	document.getElementById("output").innerHTML = "";
	var table = document.createElement("table");
	for (var i = 0; i < data.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < data[i].length; j++) {
			var firstNameCell = row.insertCell(-1);
			firstNameCell.appendChild(document.createTextNode(data[i][j]));
		}
	}
	document.getElementById("output").appendChild(table);
}

 