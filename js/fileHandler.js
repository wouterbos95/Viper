header;
data;
target;

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
	header = [];
	header = allTextLines[0].split(';'); // to safe the header-titles, so you can select target
	
	for(var l=1; l<allTextLines.length ;l++){
		lines.push(allTextLines[l].split(';')); 
	}
	data = lines;
	data = transpose();
	console.log(data);
	showSelector();
	//drawOutput();
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
	document.getElementById("header").innerHTML = "";
	// first print the header
	document.getElementById("header").innerHTML = "<h2>Header:</h2><br>";

	var table = document.createElement("table");
	var r = table.insertRow(0); 
	var c = r.insertCell(0);
	for (var i = 0; i < header.length; i++) {	
		c.appendChild(document.createTextNode(header[i]));
	}
	document.getElementById("header").appendChild(table);

	//second the data
	document.getElementById("data").innerHTML = "<h2>Data:</h2><br>";
	
	var table = document.createElement("table");
	for (var i = 0; i < data.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < data[i].length; j++) {
			var firstNameCell = row.insertCell(-1);
			firstNameCell.appendChild(document.createTextNode(data[i][j]));
		}
	}
	document.getElementById("data").appendChild(table);
	
	document.getElementById("target").innerHTML = "";
	// first print the header
	document.getElementById("target").innerHTML = "<h2>Target:</h2><br>";

	var table = document.createElement("table");
	var r = table.insertRow(0); 
	var c = r.insertCell(0);
	for (var i = 0; i < target.length; i++) {	
		c.appendChild(document.createTextNode(target[i]));
	}
	document.getElementById("target").appendChild(table);
}

function showSelector(){
	document.getElementById("info").innerHTML = "<select id='selector' onchange='selectTarget(value)'></select>";
	choice = document.getElementById('selector');
	choice.add(new Option("Choice a target"));
	for (var i = 0; i < header.length; i++) {	
    opt = new Option;
		opt.value = header[i];
		opt.text = header[i];
		choice.add(opt);
	}
}

function selectTarget(value){
	target = [];
	index = header.indexOf(value);
	target = data[index];
	data.splice(index, 1); 

	var temp = "Selected target: <b>";
	temp += value;
	temp += "</b>";
	document.getElementById("info").innerHTML = temp;

	//drawOutput();
}

 