/**
 * Created by Srayuth Choun on 2/18/2016.
 */
var myCenter=new google.maps.LatLng(36.778259,-119.417931); //CA latitude

function initCA() {
    var mapProp = {
        center: myCenter, //CA coordinate
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP //Type of map from Google
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp); //Applying google map to id map div

    /*var marker = new google.maps.Marker({
        position: myCenter,
    });
    var map = new google.maps.Map(document.getElementById("map"), mapProp);


    google.maps.event.addDomListener(window, 'load', initCA);*/
}