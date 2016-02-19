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
        console.log("I posted the map woohoo");
        var mapProp = {
            center: this.location, //CA coordinate
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP //Type of map from Google
        };

        var map = new google.maps.Map(document.getElementById("map"), mapProp); //Applying google map to id map div
    };

    //this will be the function that adds photos to a page

    this.postPhotos = function (){
        $.ajax({
            datatype: 'json',
            method: "get",
            url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=3&sort=relevance&text='+ this.name,
            success: function (result) {
                console.log('ajax was a success' + result);

                global_result = result;
                for (var i = 0; i < global_result.photos.photo.length; i++) {
                    var farm = global_result.photos.photo[i].farm;
                    var id = global_result.photos.photo[i].id;
                    var secret = global_result.photos.photo[i].secret;
                    var server = global_result.photos.photo[i].server;
                    var url = ('https://farm' + farm + '.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
                    attractionImg = $('<img>').attr('src', url);
                    $(".photo").append(attractionImg);
                }
            }
        });

        console.log("I posted a photo woohoo");
    };
};

//creating CALIFORNIA state object
var california = new state("California");

//creating CA CULTURE attraction object
var griffith = new attraction("Griffith Observatory");
var huntGarden = new attraction("Huntington Library & Garden");
var getty = new attraction("The Getty Center");
var railroad = new attraction("California State Railroad Museum");
var artWalk = new attraction("Downtown LA art walk");

//adding the CA CULTURE attraction objects to the state object
california.culture.top1 = griffith;
california.culture.top2 = huntGarden;
california.culture.top3 = getty;
california.culture.top4 = railroad;
california.culture.top5 = artWalk;

//creating CA ENTERTAINMENT attraction object
var diegoZoo = new attraction("San Diego Zoo");
var disney = new attraction("Disneyland/California Adventure");
var seaWorld = new attraction("Sea World");
var bayAqua = new attraction("Monterey Bay Aquarium");
var legoLand = new attraction("Lego Land");

//adding the CA ENTERTAINMENT attraction objects to the state object
california.entertainment.top1 = diegoZoo;
california.entertainment.top2 = disney;
california.entertainment.top3 = seaWorld;
california.entertainment.top4 = bayAqua;
california.entertainment.top5 = legoLand;

//creating CA LANDMARKS attraction object
var goldenGate = new attraction("Golden Gate Bridge");
var hollywood = new attraction("Hollywood");
var alcatraz = new attraction("Alcatraz");
var santaPier = new attraction("Santa Monica Pier");
var ussMidway = new attraction("USS Midway Museum");

//adding the CA LANDMARKS attraction objects to the state object
california.landmarks.top1 = goldenGate;
california.landmarks.top2 = hollywood;
california.landmarks.top3 = alcatraz;
california.landmarks.top4 = santaPier;
california.landmarks.top5 = ussMidway;

//creating CA NATURE attraction object
var yosemite = new attraction("Yosemite National Park");
var joshuaTree = new attraction("Joshua Tree National Park");
var redWood = new attraction("Redwood National Park");
var sequoiaKings = new attraction("Sequoia and Kings Canyon National Parks");
var lakeTahoe = new attraction("Lake Tahoe");

//adding the CA NATURE attraction objects to the state object
california.nature.top1 = yosemite;
california.nature.top2 = joshuaTree;
california.nature.top3 = redWood;
california.nature.top4 = sequoiaKings;
california.nature.top5 = lakeTahoe;

//creating NEW YORK state object
var newYork = new state("New York");

//creating NY CULTURE attraction object
var metroArt = new attraction("The Metropolitan Museum of Art");
var septElev = new attraction("The National 9/11 Memorial & Museum");
var ellis = new attraction("Ellis Island");
var publicLib = new attraction("New York Public Library");
var guggen = new attraction("Guggenheim");

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
var liberty = new attraction("Statue of Liberty");
var empState = new attraction("Empire State Building");
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