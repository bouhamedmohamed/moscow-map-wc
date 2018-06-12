 var markers = new Array();
function drawData(){
var marker, i;
places="";
for (i = 0; i < locations.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][4], locations[i][5]),
    map: map
  });
  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
	  
    }
  })(marker, i));
 markers.push(marker);
}
indexData(locations);
}
function indexData(locations){
bar ="";

eatViande="";
eatItalien="";
eatBreakFast="";

placeAll="";
placeMusuem="";
placePark="";

shopping="";

hotel="";
aeroport="";
for (i = 0; i < locations.length; i++) {  
switch(locations[i][1]) {
    case "bar":
        bar += "<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";
        break;
    case "eat":
		createEat(locations[i][2]);
        break;
    case "shopping":
         shopping +="<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";
        break;
	case "place":
         createPlace(locations[i][2]);
        break;
	case "hotel":
         hotel +="<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";
		 break;
	case "aeroport":
         aeroport +="<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";
        break;
    default:
        aeroport +="<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";
}
}

eat="<b>Grill</b><ul>"+eatViande+"</ul><br><b>Italien</b><ul>"+eatItalien+"</ul><br><b>BreakFast</b><ul>"+eatBreakFast+"</ul>";
place="<b>Publics</b><ul>"+placeAll+"</ul><br><b>Musuems</b><ul>"+placeMusuem+"</ul><br><b>Parcs</b><ul>"+placePark+"</ul>";
toShow="<table width='100%' border='1'>";
toShow+="<tr><td>Bars</td><td>Restos</td><td>Shopping</td></tr>";
toShow+="<tr><td>"+bar+"</td><td>"+eat+"</td><td>"+shopping+"</td></tr>";
toShow+="<tr><td>Places</td><td>Hotels</td><td>Aeroports/Gares</td></tr>";
toShow+="<tr><td>"+place+"</td><td>"+hotel+"</td><td>"+aeroport+"</td></tr>";
toShow+="</table>";
$("#placesDiv").html(toShow);

}

function openMarker(indice)
{
	infowindow.setContent(locations[indice][0]);
    infowindow.open(map, markers[indice]);
}
function createEat(item)
{
	switch(item) {
		case "viande":
			eatViande += "<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";
		 break;
		case "italien":
			eatItalien += "<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";
		 break;
		default:
            eatBreakFast +="<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";
		}
}

function createPlace(item)
{

	switch(item) {
		case "all":
			placeAll += "<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";
		 break;
		case "musuem":
			placeMusuem += "<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";
		 break;
		default:
            placePark += "<a href='#' onclick='openMarker("+i+")'>"+locations[i][3]+"</a><br>";

		}
}