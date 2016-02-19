/**
 * Created by Srayuth Choun on 2/18/2016.
 */

//Google Map with Google Street
function initializeMap() {
    var disneyland = {lat: 33.8090, lng: -117.9190};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: disneyland,
        zoom: 14
    });
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: disneyland,
            pov: {
                heading: 34,
                pitch: 10
            }
        });
    map.setStreetView(panorama);
}

//Regular Map function with no markers
/*var myCenter=new google.maps.LatLng(36.778259,-119.417931); //CA latitude
 function initialize() {
 var mapProp = {
 center: myCenter, //CA coordinate
 zoom: 6,
 mapTypeId: google.maps.MapTypeId.ROADMAP //Type of map from Google
 };

 var map = new google.maps.Map(document.getElementById("map"), mapProp); //Applying google map to id map div

 } */
