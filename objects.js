/* @constructor
 * params: name
 */

var state = function (name) {
    this.name = name;
    this.interests = {
        'culture': {},
        'entertainment': {},
        'landmarks': {},
        'nature': {}
    }

};

/* @constructor
 * params:
 * location: the google maps coordinates
 * photos: an array of photo urls
 */
var attraction = function (name, location) {
    this.name = name;
    this.location = location;

    //this adds the name of the attraction to the modal
    this.postName = function (interest, index) {
        $('.title' + interest + index).text(this.name);
    };

    //this will be the function that adds maps to a page
    this.postMap = function () {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: this.location,
            zoom: 14
        });
        var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
                position: this.location,
                pov: {
                    heading: 34,
                    pitch: 10
                }
            });
        map.setStreetView(panorama);
    };

    //this will be the function that adds photos to a page

    this.postPhotos = function (interest, index){
        $("#photo"  + interest + index).html(""); //clears the photo divs
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
                    $("#photo"  + interest + index).append(attractionImg);
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
california.interests.culture.top1 = griffith;
california.interests.culture.top2 = huntGarden;
california.interests.culture.top3 = getty;
california.interests.culture.top4 = railroad;
california.interests.culture.top5 = artWalk;

//creating CA ENTERTAINMENT attraction object
var diegoZoo = new attraction("San Diego Zoo");
var disney = new attraction("Disneyland/California Adventure", {lat: 33.8090, lng: -117.9190});
var seaWorld = new attraction("Sea World");
var bayAqua = new attraction("Monterey Bay Aquarium");
var legoLand = new attraction("Legoland California");

//adding the CA ENTERTAINMENT attraction objects to the state object
california.interests.entertainment.top1 = diegoZoo;
california.interests.entertainment.top2 = disney;
california.interests.entertainment.top3 = seaWorld;
california.interests.entertainment.top4 = bayAqua;
california.interests.entertainment.top5 = legoLand;

//creating CA LANDMARKS attraction object
var goldenGate = new attraction("Golden Gate Bridge");
var hollywood = new attraction("Hollywood");
var alcatraz = new attraction("Alcatraz");
var santaPier = new attraction("Santa Monica Pier");
var ussMidway = new attraction("USS Midway Museum");

//adding the CA LANDMARKS attraction objects to the state object
california.interests.landmarks.top1 = goldenGate;
california.interests.landmarks.top2 = hollywood;
california.interests.landmarks.top3 = alcatraz;
california.interests.landmarks.top4 = santaPier;
california.interests.landmarks.top5 = ussMidway;

//creating CA NATURE attraction object
var yosemite = new attraction("Yosemite National Park");
var joshuaTree = new attraction("Joshua Tree National Park");
var redWood = new attraction("Redwood National Park");
var sequoiaKings = new attraction("Sequoia and Kings Canyon National Parks");
var lakeTahoe = new attraction("Lake Tahoe");

//adding the CA NATURE attraction objects to the state object
california.interests.nature.top1 = yosemite;
california.interests.nature.top2 = joshuaTree;
california.interests.nature.top3 = redWood;
california.interests.nature.top4 = sequoiaKings;
california.interests.nature.top5 = lakeTahoe;

//creating NEW YORK state object
var newYork = new state("New York");

//creating NY CULTURE attraction object
var metroArt = new attraction("The Metropolitan Museum of Art");
var septElev = new attraction("The National 9/11 Memorial & Museum");
var ellis = new attraction("Ellis Island");
var publicLib = new attraction("New York Public Library");
var guggen = new attraction("Guggenheim");

//adding the NY CULTURE attraction objects to the state object
newYork.interests.culture.top1 = metroArt;
newYork.interests.culture.top2 = septElev;
newYork.interests.culture.top3 = ellis;
newYork.interests.culture.top4 = publicLib;
newYork.interests.culture.top5 = guggen;

//creating NY ENTERTAINMENT attraction object
var broadWay = new attraction("Broadway");
var tonightShow = new attraction("The Tonight Show");
var madGarden = new attraction("Madison Square Garden");
var bronxZoo = new attraction("Bronx Zoo");
var coneyIsl = new attraction("Coney Island");

//adding the NY ENTERTAINMENT attraction objects to the state object
newYork.interests.entertainment.top1 = broadWay;
newYork.interests.entertainment.top2 = tonightShow;
newYork.interests.entertainment.top3 = madGarden;
newYork.interests.entertainment.top4 = bronxZoo;
newYork.interests.entertainment.top5 = coneyIsl;

//creating NY LANDMARKS attraction object
var liberty = new attraction("Statue of Liberty");
var empState = new attraction("Empire State Building");
var rockCenter = new attraction("Rockefeller Center");
var timeSquare = new attraction("Times Square");
var brookBridge = new attraction("Brooklyn Bridge");

//adding the NY LANDMARKS attraction objects to the state object
newYork.interests.landmarks.top1 = liberty;
newYork.interests.landmarks.top2 = empState;
newYork.interests.landmarks.top3 = rockCenter;
newYork.interests.landmarks.top4 = timeSquare;
newYork.interests.landmarks.top5 = brookBridge;

//creating NY NATURE attraction object
var centPark = new attraction("Central Park");
var niagara = new attraction("Niagara Falls");
var lakeErie = new attraction("Lake Erie");
var letchPark = new attraction("Letchworth State Park");
var jonesBeach = new attraction("Jones Beach State Park");

//adding the NY NATURE attraction objects to the state object
newYork.interests.nature.top1 = centPark;
newYork.interests.nature.top2 = niagara;
newYork.interests.nature.top3 = lakeErie;
newYork.interests.nature.top4 = letchPark;
newYork.interests.nature.top5 = jonesBeach;

//creating FLORIDA state object
var florida = new state("Florida");

//creating FL CULTURE attraction object
var castilloMarc = new attraction("Castillo de San Marcos");
var dali = new attraction("Salvador Dali Museum");
var navalMuse = new attraction("National Naval Aviation Museum");
var spaceCent = new attraction("Kennedy Space Center");
var wonderWork = new attraction("Wonderworks");

//adding the FL CULTURE attraction objects to the state object
florida.interests.culture.top1 = castilloMarc;
florida.interests.culture.top2 = dali;
florida.interests.culture.top3 = navalMuse;
florida.interests.culture.top4 = spaceCent;
florida.interests.culture.top5 = wonderWork;

//creating FL ENTERTAINMENT attraction object
var disneyWorld = new attraction("Walt Disney World");
var buschGard = new attraction("Busch Gardens Tampa");
var univStudio = new attraction("Universal Studios");
var disCove = new attraction("Discovery Cove");
var epcot = new attraction("Epcot");

//adding the FL ENTERTAINMENT attraction objects to the state object
florida.interests.entertainment.top1 = disneyWorld;
florida.interests.entertainment.top2 = buschGard;
florida.interests.entertainment.top3 = univStudio;
florida.interests.entertainment.top4 = disCove;
florida.interests.entertainment.top5 = epcot;

//creating FL LANDMARKS attraction object
var overHigh = new attraction("Overseas Highway");
var keyWest = new attraction("Key West");
var bokTower = new attraction("Bok Tower Gardens");
var bridgeLion = new attraction("Bridge of Lions");
var plazaFerd = new attraction("Plaza Ferdinand VII");

//adding the FL LANDMARKS attraction objects to the state object
florida.interests.landmarks.top1 = overHigh;
florida.interests.landmarks.top2 = keyWest;
florida.interests.landmarks.top3 = bokTower;
florida.interests.landmarks.top4 = bridgeLion;
florida.interests.landmarks.top5 = plazaFerd;

//creating FL NATURE attraction object
var everGlade = new attraction("EverGlades");
var dryTort = new attraction("Dry Tortugas");
var aerialAdv = new attraction("Aerial Adventure Park");
var flCavern = new attraction("Florida Caverns State Park");
var fallWater = new attraction("Falling Waters State Park");

//adding the FL NATURE attraction objects to the state object
florida.interests.nature.top1 = everGlade;
florida.interests.nature.top2 = dryTort;
florida.interests.nature.top3 = aerialAdv;
florida.interests.nature.top4 = flCavern;
florida.interests.nature.top5 = fallWater;

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