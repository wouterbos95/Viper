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
			<input type="file" id="csvFileInput" onchange="handleFiles(this.files)" accept=".csv">
			<div id="output"></div>
		</div>
    <?php include 'footer.php';?>
  
  
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <!--script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script-->
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="../bootstrap-3.3.7/dist/js/bootstrap.min.js"></script>
    <script src="../bootstrap-3.3.7/docs/assets/js/docs.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../bootstrap-3.3.7/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
    
    		<!-- import all VIPER documents -->
		<script type="text/javascript" src="js/fileHandler.js"></script>

	</body>
</html>