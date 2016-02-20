/* @constructor
 * params: name
 */

var state = function (name) {
    this.name = name;
    this.interests = {
        'culture': {},
        'entertainment': {},
        'landmarks': {},
        'nature': {},
    }

};

/* @constructor
 * params:
 * location: the google maps coordinates
 * photos: an array of photo urls
 */
var attraction = function (name, location, url, wiki) {
    this.name = name;
    this.location = location;
    this.url = url;
    this.wiki = wiki;


    //this adds the name of the attraction to the modal
    this.postName = function (interest, index) {
        $('.title' + interest + index).html('<a href="' + this.url + '">' + this.name + '</a>');
    };

    //this will be the function that adds maps to a page
    this.postMap = function (interest, index) {//left side of the map
        var map = new google.maps.Map(document.getElementById('map'  + interest + index), {//id map, google.maps.Map is google's jquery
            center: this.location,//this is long, lat
            zoom: 14
        });
        var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'  + interest + index), {
                position: this.location,
                pov: {
                    heading: 34,
                    pitch: 10
                }
            });
        map.setStreetView(panorama);
    };

    /*This function receives the photo objects from the Flickr API.  It takes in the parameters interest and index
    * postman was used to find the search criteria.  this.name was added to the url. A for loop is run to get the information
    * needed to display the photos.  There are 3 photos per pages in this case.  The url is a concatenated string that
    * is appended to the id photo..  */

    this.postPhotos = function (interest, index){
        $.ajax({
            datatype: 'json',
            method: "get",
            url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=3&sort=relevance&text='+ this.name,
            success: function (result) {
                console.log('ajax was a success' + result);
                $("#photo"  + interest + index).html(""); //clears the photo divs

                global_result = result;
                for (var i = 0; i < global_result.photos.photo.length; i++) {
                    var farm = global_result.photos.photo[i].farm;
                    var id = global_result.photos.photo[i].id;
                    var secret = global_result.photos.photo[i].secret;
                    var server = global_result.photos.photo[i].server;
                    var url = ('https://farm' + farm + '.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
                    attractionImg = $('<img>').attr('src', url);

                    $("#photo"  + interest + index).append(attractionImg);

                }
            }
        });

        console.log("I posted a photo woohoo");
    };

    //this will be the function to add description to the page

    this.postDescription = function (interest, index) {
        $.ajax({
            type: "GET",
            url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + this.wiki + "&callback=?",
            dataType: "json",
            success: function (result) {
                console.log('ajax was a success' + result);
                $('#desc' + interest + index).html("");//clears the photo divs
                var text = result.parse.text["*"];
                var blurb = $('<div></div>').html(text);
                blurb.find('a').each(function() { $(this).replaceWith($(this).html()); }); // remove links as they will not work
                $('#desc' + interest + index).html($(blurb).find('p:first')); //Add 1st paragraph to the html
                $('#desc' + interest + index).append($(blurb).find('p:nth-child(2)')); //Add 2nd paragraph to the html


            }
        });
    };
};



//creating CALIFORNIA state object
var california = new state("California");

//creating CA CULTURE attraction object
//The attraction object contains the display title for the attraction/keyword for Flickr, longitude/latitude for
//googlemaps and the key words for the wikipedia search
var griffith = new attraction("Griffith Observatory", {lat: 34.1186, lng: -118.3004}, "http://griffithobservatory.org/", 'Griffith_Observatory');
var huntGarden = new attraction("Huntington Library & Garden", {lat: 34.1272, lng: -118.1100}, "http://www.huntington.org/", 'Huntington_Library');
var getty = new attraction("The Getty Center", {lat: 34.079, lng: -118.4751}, "http://www.getty.edu/museum/", 'J._Paul_Getty_Museum');
var railroad = new attraction("California State Railroad Museum", {lat: 38.5847, lng: -121.5044}, "http://www.csrmf.org/", 'California_State_Railroad_Museum');
var artWalk = new attraction("Downtown LA art walk", {lat: 34.0570, lng: -118.2380}, "http://downtownartwalk.org/", 'Gallery_Row,_Los_Angeles');



//adding the CA CULTURE attraction objects to the state object
california.interests.culture.top1 = griffith;
california.interests.culture.top2 = huntGarden;
california.interests.culture.top3 = getty;
california.interests.culture.top4 = railroad;
california.interests.culture.top5 = artWalk;

//creating CA ENTERTAINMENT attraction object

var diegoZoo = new attraction("San Diego Zoo", {lat: 32.7357, lng: -117.175658}, "http://zoo.sandiegozoo.org/", "San_Diego_Zoo");
var disney = new attraction("Disneyland/California Adventure", {lat: 33.8090, lng: -117.9190}, "https://disneyland.disney.go.com/", "Disneyland");
var seaWorld = new attraction("Sea World", {lat: 32.7658, lng: -117.2273}, "https://seaworldparks.com/en/seaworld-sandiego/", "SeaWorld");
var bayAqua = new attraction("Monterey Bay Aquarium", {lat: 36.6183, lng: -121.9015}, "http://www.montereybayaquarium.org/", "Monterey_Bay_Aquarium");
var legoLand = new attraction("Legoland California", {lat: 33.1267, lng: -117.3111}, "http://www.legoland.com/california/", "Legoland");



//adding the CA ENTERTAINMENT attraction objects to the state object
california.interests.entertainment.top1 = diegoZoo;
california.interests.entertainment.top2 = disney;
california.interests.entertainment.top3 = seaWorld;
california.interests.entertainment.top4 = bayAqua;
california.interests.entertainment.top5 = legoLand;

//creating CA LANDMARKS attraction object

var goldenGate = new attraction("Golden Gate Bridge", {lat: 37.8197, lng: -122.4786}, "http://goldengatebridge.org/", "Golden_Gate_Bridge");
var hollywood = new attraction("Hollywood", {lat: 34.1000, lng: -118.3333}, "http://hollywoodsign.org/", "Hollywood");
var alcatraz = new attraction("Alcatraz", {lat: 37.8267, lng: -122.4233}, "http://www.nps.gov/alca/index.htm", "Alcatraz_Island");
var santaPier = new attraction("Santa Monica Pier", {lat:34.0086, lng: -118.4986}, "http://santamonicapier.org/", "Santa_Monica_Pier");
var ussMidway = new attraction("USS Midway Museum", {lat:32.7113762, lng: -117.175658}, "http://www.midway.org/", "USS_Midway_Museum");





//adding the CA LANDMARKS attraction objects to the state object
california.interests.landmarks.top1 = goldenGate;
california.interests.landmarks.top2 = hollywood;
california.interests.landmarks.top3 = alcatraz;
california.interests.landmarks.top4 = santaPier;
california.interests.landmarks.top5 = ussMidway;

//creating CA NATURE attraction object
var yosemite = new attraction("Yosemite National Park", {lat: 37.8499, lng: -119.5677}, "http://www.nps.gov/yose/index.htm", "Yosemite_National_Park");
var joshuaTree = new attraction("Joshua Tree National Park", {lat: 33.7884, lng: -115.8982}, "http://www.nps.gov/jotr/index.htm", "Joshua_Tree_National_Park");
var redWood = new attraction("Redwood National Park", {lat: 41.213181, lng: -124.004631}, "http://www.nps.gov/redw/index.htm", "Redwood_National_and_State_Parks");
var sequoiaKings = new attraction("Sequoia and Kings Canyon National Parks", {lat: 36.5647, lng: -118.7734}, "http://www.nps.gov/seki/index.htm", "Sequoia_and_Kings_Canyon_National_Parks");
var lakeTahoe = new attraction("Lake Tahoe", {lat: 39.0917, lng: -120.0417}, "http://www.visitinglaketahoe.com/", "Lake_Tahoe");

//adding the CA NATURE attraction objects to the state object
california.interests.nature.top1 = yosemite;
california.interests.nature.top2 = joshuaTree;
california.interests.nature.top3 = redWood;
california.interests.nature.top4 = sequoiaKings;
california.interests.nature.top5 = lakeTahoe;

//creating NEW YORK state object
var newYork = new state("New York");

//creating NY CULTURE attraction object

var metroArt = new attraction("The Metropolitan Museum of Art", {lat: 40.7789, lng: -73.9637}, "http://www.metmuseum.org/", "Metropolitan_Museum_of_Art");
var septElev = new attraction("The National 9/11 Memorial & Museum", {lat: 40.7111, lng: -74.0146}, "http://www.911memorial.org/", "National_September_11_Memorial_%26_Museum");
var ellis = new attraction("Ellis Island", {lat: 40.6986, lng: -74.0400}, "http://www.libertyellisfoundation.org/", "Ellis_Island");
var publicLib = new attraction("New York Public Library", {lat: 40.7527, lng: -73.9818}, "http://www.nypl.org/", "New_York_Public_Library");
var guggen = new attraction("Guggenheim", {lat: 40.782879, lng: -73.959027}, "http://www.guggenheim.org/", "Solomon_R._Guggenheim_Museum");



//adding the NY CULTURE attraction objects to the state object
newYork.interests.culture.top1 = metroArt;
newYork.interests.culture.top2 = septElev;
newYork.interests.culture.top3 = ellis;
newYork.interests.culture.top4 = publicLib;
newYork.interests.culture.top5 = guggen;

//creating NY ENTERTAINMENT attraction object

var broadWay = new attraction("Broadway", {lat: 40.7635, lng: -73.9835}, "http://www.broadway.com/", "Broadway_theatre");
var tonightShow = new attraction("The Tonight Show", {lat: 40.7590, lng: -73.9790}, "http://www.nbc.com/the-tonight-show", "The_Tonight_Show");
var madGarden = new attraction("Madison Square Garden", {lat: 40.7506, lng: -73.9936}, "http://www.thegarden.com/", "Madison_Square_Garden");
var bronxZoo = new attraction("Bronx Zoo", {lat: 40.8506, lng: -73.8754}, "http://bronxzoo.com/", "Bronx_Zoo");
var coneyIsl = new attraction("Coney Island", {lat: 40.5749, lng: -73.9859}, "http://www.coneyisland.com/", "Coney_Island");



//adding the NY ENTERTAINMENT attraction objects to the state object
newYork.interests.entertainment.top1 = broadWay;
newYork.interests.entertainment.top2 = tonightShow;
newYork.interests.entertainment.top3 = madGarden;
newYork.interests.entertainment.top4 = bronxZoo;
newYork.interests.entertainment.top5 = coneyIsl;

//creating NY LANDMARKS attraction object

var liberty = new attraction("Statue of Liberty", {lat: 40.6892, lng: -74.0444}, "http://www.nps.gov/stli/index.htm", "Statue_of_Liberty");
var empState = new attraction("Empire State Building", {lat: 40.7484, lng: -73.9857}, "http://www.esbnyc.com/", "Empire_State_Building");
var rockCenter = new attraction("Rockefeller Center", {lat:40.7586, lng: -73.9792}, "https://www.rockefellercenter.com/", "Rockefeller_Center");
var timeSquare = new attraction("Times Square", {lat: 40.7577, lng: -73.9857}, "http://www.timessquarenyc.org/index.aspx", "Times_Square");
var brookBridge = new attraction("Brooklyn Bridge", {lat:40.7057, lng: -73.9964}, "http://www.brooklynbridgepark.org/", "Brooklyn_Bridge");



//adding the NY LANDMARKS attraction objects to the state object
newYork.interests.landmarks.top1 = liberty;
newYork.interests.landmarks.top2 = empState;
newYork.interests.landmarks.top3 = rockCenter;
newYork.interests.landmarks.top4 = timeSquare;
newYork.interests.landmarks.top5 = brookBridge;

//creating NY NATURE attraction object

var centPark = new attraction("Central Park", {lat: 40.7833, lng: -73.9667}, "http://www.centralparknyc.org/", "Central_Park");
var niagara = new attraction("Niagara Falls", {lat: 43.1000, lng: -79.0167}, "http://www.niagarafallsstatepark.com/", "Niagara_Falls");
var lakeErie = new attraction("Lake Erie", {lat: 42.2000, lng: -81.2000}, "http://nysparks.com/parks/129/details.aspx", "Lake_Erie");
var letchPark = new attraction("Letchworth State Park", {lat: 42.6347, lng: -77.9833}, "http://nysparks.com/parks/79/details.aspx", "Letchworth_State_Park");
var jonesBeach = new attraction("Jones Beach State Park", {lat: 40.6142, lng: -73.5361}, "http://nysparks.com/parks/10/details.aspx", "Jones_Beach_State_Park");



//adding the NY NATURE attraction objects to the state object
newYork.interests.nature.top1 = centPark;
newYork.interests.nature.top2 = niagara;
newYork.interests.nature.top3 = lakeErie;
newYork.interests.nature.top4 = letchPark;
newYork.interests.nature.top5 = jonesBeach;

//creating FLORIDA state object
var florida = new state("Florida");

//creating FL CULTURE attraction object
var castilloMarc = new attraction("Castillo de San Marcos", {lat: 29.8978, lng: -81.3114}, "http://www.nps.gov/casa/index.htm", 'Castillo_de_San_Marcos');
var dali = new attraction("Salvador Dali Museum", {lat: 27.7605833, lng: -82.6362096}, "http://thedali.org/", 'Salvador_Dalí_Museum');
var navalMuse = new attraction("National Naval Aviation Museum", {lat: 30.3496, lng: -87.3036}, 'National_Naval_Aviation_Museum');
var spaceCent = new attraction("Kennedy Space Center", {lat: 28.5241, lng: -80.6508}, "http://www.navalaviationmuseum.org/", 'Kennedy_Space_Center');
var wonderWork = new attraction("Wonderworks", {lat: 28.4337, lng: -81.4717}, "http://www.wonderworksonline.com/", 'WonderWorks_(museum)');

//adding the FL CULTURE attraction objects to the state object
florida.interests.culture.top1 = castilloMarc;
florida.interests.culture.top2 = dali;
florida.interests.culture.top3 = navalMuse;
florida.interests.culture.top4 = spaceCent;
florida.interests.culture.top5 = wonderWork;

//creating FL ENTERTAINMENT attraction object
var disneyWorld = new attraction("Disney world", {lat: 28.4186, lng: -81.5811}, "https://disneyworld.disney.go.com/", 'Walt_Disney_World');
var buschGard = new attraction("Busch Gardens Tampa", {lat: 28.0379, lng: -82.4216}, "https://seaworldparks.com/en/buschgardens-tampa/", 'Busch_Gardens_Tampa');
var univStudio = new attraction("Universal Studios", {lat: 28.4759, lng: -81.4687}, "https://www.universalorlando.com/Theme-Parks/Universal-Studios-Florida.aspx", 'Universal_Parks_%26_Resorts');
var disCove = new attraction("Discovery Cove", {lat: 28.4054, lng: -81.4617}, "https://discoverycove.com/", 'Discovery_Cove');
var epcot = new attraction("Epcot", {lat:28.3710 , lng: -81.5500}, "https://disneyworld.disney.go.com/destinations/epcot/", 'Epcot');

//adding the FL ENTERTAINMENT attraction objects to the state object
florida.interests.entertainment.top1 = disneyWorld;
florida.interests.entertainment.top2 = buschGard;
florida.interests.entertainment.top3 = univStudio;
florida.interests.entertainment.top4 = disCove;
florida.interests.entertainment.top5 = epcot;

//creating FL LANDMARKS attraction object
var overHigh = new attraction("Overseas Highway", {lat: 24.7836, lng: -80.9033}, "http://www.fla-keys.com/highway.cfm", 'Overseas_Highway');
var keyWest = new attraction("Key West", {lat: 24.5592, lng: -81.7840}, "http://keywest.com/", 'Key_West,_Florida');
var bokTower = new attraction("Bok Tower Gardens", {lat: 27.9353, lng: -81.5775}, "https://boktowergardens.org/", 'Bok_Tower_Gardens');
var bridgeLion = new attraction("Bridge of Lions", {lat: 29.8925, lng: -81.3075}, "https://en.wikipedia.org/wiki/Bridge_of_Lions", 'Bridge_of_Lions');
var plazaFerd = new attraction("Plaza Ferdinand VII", {lat: 30.4075, lng: -87.2139}, "http://www.nps.gov/nr/travel/american_latino_heritage/Plaza_Ferdinand_VII.html", 'Plaza_Ferdinand_VII');


//adding the FL LANDMARKS attraction objects to the state object
florida.interests.landmarks.top1 = overHigh;
florida.interests.landmarks.top2 = keyWest;
florida.interests.landmarks.top3 = bokTower;
florida.interests.landmarks.top4 = bridgeLion;
florida.interests.landmarks.top5 = plazaFerd;

//creating FL NATURE attraction object
var everGlade = new attraction("EverGlades", {lat: 25.3167, lng: -80.9333}, "http://www.nps.gov/ever/index.htm", 'Everglades_National_Park');
var dryTort = new attraction("Dry Tortugas", {lat: 24.6286, lng: -82.8733}, "http://www.nps.gov/drto/index.htm", 'Dry_Tortugas_National_Park');
var aerialAdv = new attraction("Treetrek Adventures", {lat: 28.295922, lng: -81.59056}, "http://www.jiminypeak.com/Summer/Attractions/Aerial-Adventure-Park", 'Adventure_park');
var flCavern = new attraction("Florida Caverns State Park", {lat: 30.8139, lng: -85.2331}, "https://www.floridastateparks.org/park/Florida-Caverns", 'Florida_Caverns_State_Park');
var fallWater = new attraction("Falling Waters State Park", {lat: 30.7281, lng: -85.5286}, "https://www.floridastateparks.org/park/Falling-Waters", 'Falling_Waters_State_Park');

//adding the FL NATURE attraction objects to the state object
florida.interests.nature.top1 = everGlade;
florida.interests.nature.top2 = dryTort;
florida.interests.nature.top3 = aerialAdv;
florida.interests.nature.top4 = flCavern;
florida.interests.nature.top5 = fallWater;

