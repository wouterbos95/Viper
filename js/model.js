var app = {}; // create namespace for our app
 

//--------------
// Models
//--------------
app.Viper = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	},
	toggle: function(){
		this.save({ completed: !this.get('completed')});
	},
	readFile: function(file){
		if (window.FileReader) {
			// FileReader are supported.
			getAsText(files[0]);
		} 
		else {
			alert('FileReader are not supported in this browser.');
		}
	}
});


//--------------
// Collections
//--------------
app.ViperCollection = Backbone.Collection.extend({
  model: app.Viper,
  localStorage: new Store("backbone-viper")
});

// instance of the Collection
app.ViperCollection = new app.ViperCollection();


//--------------
// Views
//--------------

