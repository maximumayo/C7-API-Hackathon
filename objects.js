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
    this.postDescription = function () {
        $.ajax({
            type: "GET",
            url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=legoland&callback=?",
            //contentType: "application/json; charset=utf-8",
            //async: false,
            dataType: "json",
            success: function (result) {
                console.log('ajax was a success' + result);
                var text = result.parse.text["*"];
                var blurb = $('<div></div>').html(text);
                blurb.find('a').each(function() { $(this).replaceWith($(this).html()); }); // remove links as they will not work
                $('#photoCulture1').html($(blurb).find('p:first')); //Add 1st paragraph to the html
            }
        });
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

//creating CA CULTURE Wiki Search Terms
var griffithwiki = new wikiDesc('Griffith_Observatory');
var huntwiki = new wikiDesc('Huntington_Library');
var gettywiki = new wikiDesc('J._Paul_Getty_Museum');
var railroadwiki = new wikiDesc('California_State_Railroad_Museum');
var artwalkwiki = new wikiDesc('Gallery_Row,_Los_Angeles');

//creating CA ENTERTAINMENT attraction object
var diegoZoo = new attraction("San Diego Zoo");
var disney = new attraction("Disneyland/California Adventure", {lat: 33.8090, lng: -117.9190});
var seaWorld = new attraction("Sea World");
var bayAqua = new attraction("Monterey Bay Aquarium");
var legoLand = new attraction("Lego Land");

//adding the CA ENTERTAINMENT attraction objects to the state object
california.entertainment.top1 = diegoZoo;
california.entertainment.top2 = disney;
california.entertainment.top3 = seaWorld;
california.entertainment.top4 = bayAqua;
california.entertainment.top5 = legoLand;

//creating CA ENTERTAINMENT Wiki Search Terms
var diegoZooWiki = new wikiDesc("San_Diego_Zoo");
var disneyWiki = new wikiDesc("Disneyland");
var seaWorldWiki = new wikiDesc("SeaWorld");
var bayAquaWiki = new wikiDesc("Monterey_Bay_Aquarium");
var legoLandWiki = new wikiDesc("Legoland");

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

//creating CA LANDMARKS Wiki Search Terms

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

//creating FLORIDA state object
var florida = new state("Florida");

//creating FL CULTURE attraction object
var castilloMarc = new attraction("Castillo de San Marcos");
var dali = new attraction("Salvador Dali Museum");
var navalMuse = new attraction("National Naval Aviation Museum");
var spaceCent = new attraction("Kennedy Space Center");
var wonderWork = new attraction("Wonderworks");

//adding the FL CULTURE attraction objects to the state object
florida.culture.top1 = castilloMarc;
florida.culture.top2 = dali;
florida.culture.top3 = navalMuse;
florida.culture.top4 = spaceCent;
florida.culture.top5 = wonderWork;

//creating FL ENTERTAINMENT attraction object
var disneyWorld = new attraction("Walt Disney World");
var buschGard = new attraction("Busch Gardens Tampa");
var univStudio = new attraction("Universal Studios");
var disCove = new attraction("Discovery Cove");
var epcot = new attraction("Epcot");

//adding the FL ENTERTAINMENT attraction objects to the state object
florida.entertainment.top1 = disneyWorld;
florida.entertainment.top2 = buschGard;
florida.entertainment.top3 = univStudio;
florida.entertainment.top4 = disCove;
florida.entertainment.top5 = epcot;

//creating FL LANDMARKS attraction object
var overHigh = new attraction("Overseas Highway");
var keyWest = new attraction("Key West");
var bokTower = new attraction("Bok Tower Gardens");
var bridgeLion = new attraction("Bridge of Lions");
var plazaFerd = new attraction("Plaza Ferdinand VII");

//adding the FL LANDMARKS attraction objects to the state object
florida.landmarks.top1 = overHigh;
florida.landmarks.top2 = keyWest;
florida.landmarks.top3 = bokTower;
florida.landmarks.top4 = bridgeLion;
florida.landmarks.top5 = plazaFerd;

//creating FL NATURE attraction object
var everGlade = new attraction("EverGlades");
var dryTort = new attraction("Dry Tortugas");
var aerialAdv = new attraction("Aerial Adventure Park");
var flCavern = new attraction("Florida Caverns State Park");
var fallWater = new attraction("Falling Waters State Park");

//adding the FL NATURE attraction objects to the state object
florida.nature.top1 = everGlade;
florida.nature.top2 = dryTort;
florida.nature.top3 = aerialAdv;
florida.nature.top4 = flCavern;
florida.nature.top5 = fallWater;

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
/*Attraction Links
California Culture

 http://griffithobservatory.org/

 http://www.huntington.org/

 http://www.getty.edu/museum/

 http://www.csrmf.org/

 http://downtownartwalk.org/

 California Entertainment

 http://zoo.sandiegozoo.org/

 https://disneyland.disney.go.com/

 https://seaworldparks.com/en/seaworld-sandiego/

 http://www.montereybayaquarium.org/

 http://www.legoland.com/california/

 California Landmarks

 http://goldengatebridge.org/

 http://hollywoodsign.org/

 http://www.nps.gov/alca/index.htm

 http://santamonicapier.org/

 http://www.midway.org/


 California Nature

 http://www.nps.gov/yose/index.htm

 http://www.nps.gov/jotr/index.htm

 http://www.nps.gov/redw/index.htm

 http://www.nps.gov/seki/index.htm

 http://www.visitinglaketahoe.com/



 New York Culture

 http://www.metmuseum.org/

 http://www.911memorial.org/

 http://www.libertyellisfoundation.org/

 http://www.nypl.org/

 http://www.guggenheim.org/


 New York Entertainment

 http://www.broadway.com/

 http://www.nbc.com/the-tonight-show

 http://www.thegarden.com/

 http://bronxzoo.com/

 http://www.coneyisland.com/


 New York Landmarks

 http://www.nps.gov/stli/index.htm

 http://www.esbnyc.com/

 https://www.rockefellercenter.com/

 http://www.timessquarenyc.org/index.aspx

 http://www.brooklynbridgepark.org/


 New York Nature

 http://www.centralparknyc.org/

 http://www.niagarafallsstatepark.com/

 http://nysparks.com/parks/129/details.aspx

 http://nysparks.com/parks/79/details.aspx

 http://nysparks.com/parks/10/details.aspx

 Florida Culture

 http://www.nps.gov/casa/index.htm

 http://thedali.org/

 http://www.navalaviationmuseum.org/

 https://www.kennedyspacecenter.com/

 http://www.wonderworksonline.com/


 Florida Entertainment

 https://disneyworld.disney.go.com/

 https://seaworldparks.com/en/buschgardens-tampa/

 https://www.universalorlando.com/Theme-Parks/Universal-Studios-Florida.aspx

 https://discoverycove.com/

 https://disneyworld.disney.go.com/destinations/epcot/

 Florida Landmarks

 http://www.fla-keys.com/highway.cfm

 http://keywest.com/

 https://boktowergardens.org/

 https://en.wikipedia.org/wiki/Bridge_of_Lions

 http://www.nps.gov/nr/travel/american_latino_heritage/Plaza_Ferdinand_VII.html


 Florida Nature

 http://www.nps.gov/ever/index.htm

 http://www.nps.gov/drto/index.htm

 http://www.jiminypeak.com/Summer/Attractions/Aerial-Adventure-Park

 https://www.floridastateparks.org/park/Florida-Caverns

 https://www.floridastateparks.org/park/Falling-Waters

*/


