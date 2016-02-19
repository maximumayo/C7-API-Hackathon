/* @constructor
 * params: name
 */

var state = function (name) {
    this.name = name;
    this.culture = {};
    this.entertainment = {};
    this.landmarks = {};
    this.nature = {};
};

/* @constructor
 * params:
 * location: the google maps coordinates
 * photos: an array of photo urls
 */
var attraction = function (name, location, photos) {
    this.name = name;
    this.location = location;
    this.photos = photos;

    //this adds the name of the attraction to the modal
    this.postName = function () {
        $('.page-header.header').text(this.name);
    };

    //this will be the function that adds maps to a page
    this.postMap = function () {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: this.location,
            zoom: 14
        });
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
                position: this.location,
                pov: {
                    heading: 34,
                    pitch: 10
                }
            });
        map.setStreetView(panorama);
    };

    //this will be the function that adds photos to a page

    this.postPhotos = function (){//this function will loop through photo array and append them to modal

        console.log("I posted a photo woohoo");
    };
};

//creating CALIFORNIA state object
var california = new state("California");

//creating CA CULTURE attraction object
var griffith = new attraction("Griffith Observatory", {lat: 34.1186, lng: -118.3004});
var huntGarden = new attraction("Huntington Library & Garden", {lat: 34.1272, lng: -118.1100});
var getty = new attraction("The Getty Center", {lat: 34.079, lng: -118.4751});
var railroad = new attraction("California State Railroad Museum", {lat: 38.5847, lng: -121.5044});
var artWalk = new attraction("Downtown LA art walk", {lat: 34.0570, lng: -118.2380});

//adding the CA CULTURE attraction objects to the state object
california.culture.top1 = griffith;
california.culture.top2 = huntGarden;
california.culture.top3 = getty;
california.culture.top4 = railroad;
california.culture.top5 = artWalk;

//creating CA ENTERTAINMENT attraction object
var diegoZoo = new attraction("San Diego Zoo", {lat: 32.7357, lng: -117.175658});
var disney = new attraction("Disneyland/California Adventure", {lat: 33.8090, lng: -117.9190});
var seaWorld = new attraction("Sea World", {lat: 32.7658, lng: -117.2273});
var bayAqua = new attraction("Monterey Bay Aquarium", {lat: 36.6183, lng: -121.9015});
var legoLand = new attraction("Lego Land", {lat: 33.1581, lng: -117.3506});

//adding the CA ENTERTAINMENT attraction objects to the state object
california.entertainment.top1 = diegoZoo;
california.entertainment.top2 = disney;
california.entertainment.top3 = seaWorld;
california.entertainment.top4 = bayAqua;
california.entertainment.top5 = legoLand;

//creating CA LANDMARKS attraction object
var goldenGate = new attraction("Golden Gate Bridge", {lat: 37.8197, lng: -122.4786});
var hollywood = new attraction("Hollywood", {lat: 34.1000, lng: -118.3333});
var alcatraz = new attraction("Alcatraz", {lat: 37.8267, lng: -122.4233});
var santaPier = new attraction("Santa Monica Pier", {lat:34.0086, lng: -118.4986});
var ussMidway = new attraction("USS Midway Museum", {lat:32.7113762, lng: -117.175658});

//adding the CA LANDMARKS attraction objects to the state object
california.landmarks.top1 = goldenGate;
california.landmarks.top2 = hollywood;
california.landmarks.top3 = alcatraz;
california.landmarks.top4 = santaPier;
california.landmarks.top5 = ussMidway;

//creating CA NATURE attraction object
var yosemite = new attraction("Yosemite National Park", {lat: 37.8499, lng: -119.5677});
var joshuaTree = new attraction("Joshua Tree National Park", {lat: 33.7884, lng: -115.8982});
var redWood = new attraction("Redwood National Park", {lat: 41.213181, lng: -124.004631});
var sequoiaKings = new attraction("Sequoia and Kings Canyon National Parks", {lat: 36.5647, lng: -118.7734});
var lakeTahoe = new attraction("Lake Tahoe", {lat: 39.0917, lng: -120.0417});

//adding the CA NATURE attraction objects to the state object
california.nature.top1 = yosemite;
california.nature.top2 = joshuaTree;
california.nature.top3 = redWood;
california.nature.top4 = sequoiaKings;
california.nature.top5 = lakeTahoe;

//creating NEW YORK state object
var newYork = new state("New York");

//creating NY CULTURE attraction object
var metroArt = new attraction("The Metropolitan Museum of Art", {lat: 40.7789, lng: -73.9637});
var septElev = new attraction("The National 9/11 Memorial & Museum", {lat: 40.7111, lng: -74.0146});
var ellis = new attraction("Ellis Island", {lat: 40.6986, lng: -74.0400});
var publicLib = new attraction("New York Public Library", {lat: 40.7527, lng: -73.9818});
var guggen = new attraction("Guggenheim", {lat: 40.782879, lng: -73.959027});

//adding the NY CULTURE attraction objects to the state object
newYork.culture.top1 = metroArt;
newYork.culture.top2 = septElev;
newYork.culture.top3 = ellis;
newYork.culture.top4 = publicLib;
newYork.culture.top5 = guggen;

//creating NY ENTERTAINMENT attraction object
var broadWay = new attraction("Broadway");
var tonightShow = new attraction("The Tonight Show");
var madGarden = new attraction("Madison Square Garden");
var bronxZoo = new attraction("Bronx Zoo");
var coneyIsl = new attraction("Coney Island");

//adding the NY ENTERTAINMENT attraction objects to the state object
newYork.entertainment.top1 = broadWay;
newYork.entertainment.top2 = tonightShow;
newYork.entertainment.top3 = madGarden;
newYork.entertainment.top4 = bronxZoo;
newYork.entertainment.top5 = coneyIsl;

//creating NY LANDMARKS attraction object
var liberty = new attraction("Statue of Liberty", {lat: 40.6892, lng: -74.0444});
var empState = new attraction("Empire State Building", {lat: });
var rockCenter = new attraction("Rockefeller Center");
var timeSquare = new attraction("Times Square");
var brookBridge = new attraction("Brooklyn Bridge");

//adding the NY LANDMARKS attraction objects to the state object
newYork.landmarks.top1 = liberty;
newYork.landmarks.top2 = empState;
newYork.landmarks.top3 = rockCenter;
newYork.landmarks.top4 = timeSquare;
newYork.landmarks.top5 = brookBridge;

//creating NY NATURE attraction object
var centPark = new attraction("Central Park");
var niagara = new attraction("Niagara Falls");
var lakeErie = new attraction("Lake Erie");
var letchPark = new attraction("Letchworth State Park");
var jonesBeach = new attraction("Jones Beach State Park");

//adding the NY NATURE attraction objects to the state object
newYork.nature.top1 = centPark;
newYork.nature.top2 = niagara;
newYork.nature.top3 = lakeErie;
newYork.nature.top4 = letchPark;
newYork.nature.top5 = jonesBeach;

/*
 This is what a state object would look like:

 california = {
 name: 'California',
 nature: {
 top1: {} //this object here is the yosemite object we created
 }
 culture: {},
 entertainment: {},
 landmarks: {},
 nature: {},
 }
 */