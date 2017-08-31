function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}


window.onload = function() {
                keyForSearch=getQueryVariable('searchKey');
				console.log(keyForSearch);
				if (keyForSearch == null){
					document.forms[0].init.placeholder = 'Who are you looking for?';}
				else{
                document.forms[0].init.value = keyForSearch;}
				}


var api_key = "0d37fa843e01703bf855ad6901b0c6c1";  //my last fm api key
var m=" ";

function sendRequest () {
	// xhr is to request artist information from last.fm using method artist.getInfo
	var xhr = new XMLHttpRequest();
	var method="artist.getinfo"      
	var artist = encodeURI(document.getElementById("init").value);
    xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
				var jsonObj = JSON.parse(xhr.responseText);
				var str=JSON.stringify(jsonObj,undefined,2); 
				console.log(str);
				m="<h1>"+jsonObj.artist.name+"</h1>";
				document.getElementById("info").innerHTML = m+'<img src='+jsonObj.artist.image[3]['#text']+'width:10; height:10;></br>'+'<font size="4" face="arial">'+jsonObj.artist.bio.content+'</font><br><br><a href ="'+jsonObj.artist.bio.links.link.href+'">Continue to website to know more about the artist</a>';    
				// sending name, image and bio of the artist to info div 
				}
		};
    xhr.send(null);

	// xhr1 is to request top albums of the artist from last.fm using method1 artist.getTopAlbums
	var xhr1 = new XMLHttpRequest();
	var method1 = "artist.gettopalbums"
    xhr1.open("GET", "proxy.php?method="+method1+"&artist="+artist+"&api_key="+api_key+"&format=json&limit=3", true);
    xhr1.setRequestHeader("Accept","application/json");
    xhr1.onreadystatechange = function() {
		if (xhr1.readyState == 4) {
				var jsonObj = JSON.parse(xhr1.responseText);
				var str=JSON.stringify(jsonObj,undefined,2);        
				var out=" ";
				for(var i=0;i<jsonObj.topalbums.album.length;i++)
					{
						out=out+'<img src='+jsonObj.topalbums.album[i].image[1]['#text']+' width:10;height:10;>'+'<font size="4" face="arial">'+jsonObj.topalbums.album[i].name+'</font><br/>';
					}
			document.getElementById("topAlbum").innerHTML="<h3>TOP ALBUMS</h3>"+out;
			// sending top albums of the artist to topAlbum div
			}
		};
    xhr1.send(null);



	//xhr2 is to request the similar artists from last.fm using method artist.getSimilar
	var xhr2 = new XMLHttpRequest();
	var method2 = "artist.getsimilar"
    xhr2.open("GET", "proxy.php?method="+method2+"&artist="+artist+"&api_key="+api_key+"&format=json&limit=3", true);
    xhr2.setRequestHeader("Accept","application/json");
    xhr2.onreadystatechange = function() {
		if (xhr2.readyState == 4) {
				var jsonObj = JSON.parse(xhr2.responseText);           
				var str=JSON.stringify(jsonObj,undefined,2);
				var out=" ";
				for(var i=0;i<jsonObj.similarartists.artist.length;i++)
					{
						out=out+'<img src='+jsonObj.similarartists.artist[i].image[1]['#text']+' width:10;height:10;>'+'<font size="4" face="arial">'+jsonObj.similarartists.artist[i].name+'</font><br/>';
					}   
			document.getElementById("simArt").innerHTML="<h3>SIMILAR ARTISTS</h3>"+out;
			// sending similar artist to the simArt div
			}
		};
    xhr2.send(null);
	
	}
