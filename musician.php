<!DOCTYPE html>
<html>
	<head>
		<title>Music</title>
		<link rel="stylesheet" type="text/css" href="javajam.css">
	</head>
	<body id="wrapper">
		<div>
		<nav id="nav2">
			<table>
				<tr>
					<th><img src="javajamlogo.jpg" alt="coffee" ></th>
				</tr>
				<tr>
					<td><a href="Home.html">Home</a></td>
				</tr>
				<tr>
					<td><a href="Menu.html" >Menu</a></td>
				</tr>
				<div>
				<tr>
					<td><a href="localhost/musician.php">Music</a></td>
				</tr>
				</div>
				<tr>
					<td><a href="Jobs.html">Jobs</a></td>
				</tr>
				<tr>
					<td><a href="artistdetails.html">ArtistInfo</a></td>
				</tr>
	
		
		</table>
		</nav>
		</div>
		<header>
		<h1>&nbsp;JavaJam Coffee House</h1>
		</header>
		<img class ="mugs" src="musicimage.jpg" alt="music" title="musicimage"/>
		<div>
			<h2>Music at JavaJam</h2>
			<p>The first Friday night each month at JavaJam is a special night. Join us from 8 pm to 11 pm for some music you won't want<br> to miss!</p>
		</div>
		
		
	</body>
</html>
<?php

	$conn=mysqli_connect('localhost','root','root');
	mysqli_select_db($conn,'musicians');
	
	$sql = "SELECT m.name,m.genre,MONTHNAME(p.monthyear)
			from musician as m,performance as p
			where m.musicianid=p.musicianid";
			
	$records = mysqli_query($conn,$sql);

?>


<html>
	<head>
		<title>Displaying data</title>
		<style>
			#one {
				border-collapse: collapse;	
				margin-left: 400px;
			}
			#one th {
				text-align: center;
				background-color: #221811;
				color: #DEB887;
			}
			#one tr:nth-child(even) {
				background-color: #D2B48C; 
			}
			#one tr:hover {
				background-color: #DCDCDC;
			}
			#h11 {
				background-color: #D2B48C;
				text-indent:70px;
			}
			
			
		</style>
	</head>
	<body>
		<h2 id="h11">SHOWTIMES</h2>
		<table id ="one" width="600" cellpadding="1" cellspacing="1" >
			<tr>
				<th>Name</th>
				<th>Genre</th>
				<th>Month</th>
			</tr>
			<?php
				while($row=mysqli_fetch_assoc($records))
				{
					echo "<tr align=center >";
					
					echo "<td> <a href='artistdetails.html?searchKey=".$row['name']."'>".$row['name']."</a></td>";
					echo "<td>".$row['genre']."</td>";
					echo "<td>".$row['MONTHNAME(p.monthyear)']."</td>";
					echo "</tr>";
				}
			?>
		
		</table>
		<div>
			</br>
		</div>
		<div>
			<footer>
				<p><i> Copyright &copy 2016 JavaJam Coffee House </i></br>
				<a href= "Pooja@Venkatesh.com">Pooja@Venkatesh.com</a></p>
			</footer>
		</div>
		
	</body>
</html>