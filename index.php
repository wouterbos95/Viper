<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="VIPER: an improved Visual Pattern Explorer">
		<meta name="keywords" content="VIPER, Datamining">
		<meta name="author" content="Wouter Huijs">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>VIPER: an improved Visual Pattern Explorer</title>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

		<!-- jQuery library -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

		<!-- Latest compiled JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		



		
	</head>
	<body>
    <?php include 'menu.php';?>

    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
			<section id="viper">
				<div id="info">
					<input type="file" id="csvFileInput" accept=".csv">
				</div>
				<section id="main">
					<div id="header"></div>
					<div id="data"></div>
					<div id="target"></div>
				</section>
			</section>
				
		</div>
    <?php include 'footer.php';?>
  
  
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!--script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script-->
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="./bootstrap-3.3.7/dist/js/bootstrap.min.js"></script>
    <script src="./bootstrap-3.3.7/docs/assets/js/docs.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="./bootstrap-3.3.7/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
		
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js" type="text/javascript"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js" type="text/javascript"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.0/backbone.localStorage-min.js" type="text/javascript"></script>  
    
    <!-- import all VIPER documents -->
		<script type="text/javascript" src="js/fileHandler.js"></script>
		<script type="text/javascript" src="js/model.js"></script>

	</body>
</html>