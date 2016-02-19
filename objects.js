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
var attraction = function (name, location, url) {
    this.name = name;
    this.location = location;
    this.url = url;


    //this adds the name of the attraction to the modal
    this.postName = function (interest, index) {
        $('.title' + interest + index).html('<a href="' + this.url + '">' + this.name + '</a>');
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
var griffith = new attraction("Griffith Observatory", {lat: 34.1186, lng: -118.3004}, "http://griffithobservatory.org/");
var huntGarden = new attraction("Huntington Library & Garden", {lat: 34.1272, lng: -118.1100});
var getty = new attraction("The Getty Center", {lat: 34.079, lng: -118.4751});
var railroad = new attraction("California State Railroad Museum", {lat: 38.5847, lng: -121.5044});
var artWalk = new attraction("Downtown LA art walk", {lat: 34.0570, lng: -118.2380});

//creating CA Culture Wiki Search Terms
var griffithwiki = new wikiDesc('Griffith_Observatory');
var huntwiki = new wikiDesc('Huntington_Library');
var gettywiki = new wikiDesc('J._Paul_Getty_Museum');
var railroadwiki = new wikiDesc('California_State_Railroad_Museum');
var artwalkwiki = new wikiDesc('Gallery_Row,_Los_Angeles');

//adding the CA CULTURE attraction objects to the state object
california.interests.culture.top1 = griffith;
california.interests.culture.top2 = huntGarden;
california.interests.culture.top3 = getty;
california.interests.culture.top4 = railroad;
california.interests.culture.top5 = artWalk;

//creating CA ENTERTAINMENT attraction object
var diegoZoo = new attraction("San Diego Zoo", {lat: 32.7357, lng: -117.175658});
var disney = new attraction("Disneyland/California Adventure", {lat: 33.8090, lng: -117.9190});
var seaWorld = new attraction("Sea World", {lat: 32.7658, lng: -117.2273});
var bayAqua = new attraction("Monterey Bay Aquarium", {lat: 36.6183, lng: -121.9015});
var legoLand = new attraction("Lego Land", {lat: 33.1581, lng: -117.3506});





//adding the CA ENTERTAINMENT attraction objects to the state object
california.interests.entertainment.top1 = diegoZoo;
california.interests.entertainment.top2 = disney;
california.interests.entertainment.top3 = seaWorld;
california.interests.entertainment.top4 = bayAqua;
california.interests.entertainment.top5 = legoLand;

//creating CA LANDMARKS attraction object

var goldenGate = new attraction("Golden Gate Bridge", {lat: 37.8197, lng: -122.4786});
var hollywood = new attraction("Hollywood", {lat: 34.1000, lng: -118.3333});
var alcatraz = new attraction("Alcatraz", {lat: 37.8267, lng: -122.4233});
var santaPier = new attraction("Santa Monica Pier", {lat:34.0086, lng: -118.4986});
var ussMidway = new attraction("USS Midway Museum", {lat:32.7113762, lng: -117.175658});


//adding the CA LANDMARKS attraction objects to the state object
california.interests.landmarks.top1 = goldenGate;
california.interests.landmarks.top2 = hollywood;
california.interests.landmarks.top3 = alcatraz;
california.interests.landmarks.top4 = santaPier;
california.interests.landmarks.top5 = ussMidway;

//creating CA NATURE attraction object
var yosemite = new attraction("Yosemite National Park", {lat: 37.8499, lng: -119.5677});
var joshuaTree = new attraction("Joshua Tree National Park", {lat: 33.7884, lng: -115.8982});
var redWood = new attraction("Redwood National Park", {lat: 41.213181, lng: -124.004631});
var sequoiaKings = new attraction("Sequoia and Kings Canyon National Parks", {lat: 36.5647, lng: -118.7734});
var lakeTahoe = new attraction("Lake Tahoe", {lat: 39.0917, lng: -120.0417});

//adding the CA NATURE attraction objects to the state object
california.interests.nature.top1 = yosemite;
california.interests.nature.top2 = joshuaTree;
california.interests.nature.top3 = redWood;
california.interests.nature.top4 = sequoiaKings;
california.interests.nature.top5 = lakeTahoe;

//creating NEW YORK state object
var newYork = new state("New York");

//creating NY CULTURE attraction object
var metroArt = new attraction("The Metropolitan Museum of Art", {lat: 40.7789, lng: -73.9637},'http://www.metmuseum.org/');
var septElev = new attraction("The National 9/11 Memorial & Museum", {lat: 40.7111, lng: -74.0146}, 'http://www.911memorial.org/');
var ellis = new attraction("Ellis Island", {lat: 40.6986, lng: -74.0400},  'http://www.libertyellisfoundation.org/');
var publicLib = new attraction("New York Public Library", {lat: 40.7527, lng: -73.9818}, 'http://www.nypl.org/' );
var guggen = new attraction("Guggenheim", {lat: 40.782879, lng: -73.959027},  'http://www.guggenheim.org/');

//adding the NY CULTURE attraction objects to the state object
newYork.interests.culture.top1 = metroArt;
newYork.interests.culture.top2 = septElev;
newYork.interests.culture.top3 = ellis;
newYork.interests.culture.top4 = publicLib;
newYork.interests.culture.top5 = guggen;

//creating NY ENTERTAINMENT attraction object
var broadWay = new attraction("Broadway", {lat: 40.7635, lng: -73.9835}, 'http://www.broadway.com/');
var tonightShow = new attraction("The Tonight Show", {lat: 40.7590, lng: -73.9790}, 'http://www.nbc.com/the-tonight-show');
var madGarden = new attraction("Madison Square Garden", {lat: 40.7506, lng: -73.9936}, 'http://www.thegarden.com/');
var bronxZoo = new attraction("Bronx Zoo", {lat: 40.8506, lng: -73.8754}, 'http://bronxzoo.com/');
var coneyIsl = new attraction("Coney Island", {lat: 40.5749, lng: -73.9859}, 'http://www.coneyisland.com/' );

//adding the NY ENTERTAINMENT attraction objects to the state object
newYork.interests.entertainment.top1 = broadWay;
newYork.interests.entertainment.top2 = tonightShow;
newYork.interests.entertainment.top3 = madGarden;
newYork.interests.entertainment.top4 = bronxZoo;
newYork.interests.entertainment.top5 = coneyIsl;

//creating NY LANDMARKS attraction object
var liberty = new attraction("Statue of Liberty", {lat: 40.6892, lng: -74.0444}, 'http://www.nps.gov/stli/index.htm' );
var empState = new attraction("Empire State Building", {lat: 40.7484, lng: -73.9857}, 'http://www.esbnyc.com/');
var rockCenter = new attraction("Rockefeller Center", {lat:40.7586, lng: -73.9792}, 'https://www.rockefellercenter.com/');
var timeSquare = new attraction("Times Square", {lat: 40.7577, lng: -73.9857}, ' http://www.timessquarenyc.org/index.aspx');
var brookBridge = new attraction("Brooklyn Bridge", {lat:40.7057, lng: -73.9964}, 'http://www.brooklynbridgepark.org/');

//adding the NY LANDMARKS attraction objects to the state object
newYork.interests.landmarks.top1 = liberty;
newYork.interests.landmarks.top2 = empState;
newYork.interests.landmarks.top3 = rockCenter;
newYork.interests.landmarks.top4 = timeSquare;
newYork.interests.landmarks.top5 = brookBridge;

//creating NY NATURE attraction object
var centPark = new attraction("Central Park", {lat: 40.7833, lng: -73.9667}, 'http://www.centralparknyc.org/');
var niagara = new attraction("Niagara Falls", {lat: 43.1000, lng: -79.0167}, ' http://www.niagarafallsstatepark.com/');
var lakeErie = new attraction("Lake Erie", {lat: 42.2000, lng: -81.2000}, ' http://nysparks.com/parks/129/details.aspx');
var letchPark = new attraction("Letchworth State Park", {lat: 42.6347, lng: -77.9833}, ' http://nysparks.com/parks/79/details.aspx');
var jonesBeach = new attraction("Jones Beach State Park", {lat: 40.6142, lng: -73.5361}, ' http://nysparks.com/parks/10/details.aspx');

//adding the NY NATURE attraction objects to the state object
newYork.interests.nature.top1 = centPark;
newYork.interests.nature.top2 = niagara;
newYork.interests.nature.top3 = lakeErie;
newYork.interests.nature.top4 = letchPark;
newYork.interests.nature.top5 = jonesBeach;

//creating FLORIDA state object
var florida = new state("Florida");

//creating FL CULTURE attraction object
var castilloMarc = new attraction("Castillo de San Marcos", {lat: 29.8978, lng: -81.3114});
var dali = new attraction("Salvador Dali Museum", {lat: 27.7605833, lng: -82.6362096});
var navalMuse = new attraction("National Naval Aviation Museum", {lat: 30.3496, lng: -87.3036});
var spaceCent = new attraction("Kennedy Space Center", {lat: 28.5241, lng: -80.6508});
var wonderWork = new attraction("Wonderworks", {lat: 28.4337, lng: -81.4717});

//adding the FL CULTURE attraction objects to the state object
florida.interests.culture.top1 = castilloMarc;
florida.interests.culture.top2 = dali;
florida.interests.culture.top3 = navalMuse;
florida.interests.culture.top4 = spaceCent;
florida.interests.culture.top5 = wonderWork;

//creating FL culture Wiki Search Terms
//var castilloMarcWiki = new wikiDesc('Castillo_de_San_Marcos');
//var daliWiki = new wikiDesc('Salvador_Dalí_Museum');
//var navalMuseWiki = new wikiDesc('National_Naval_Aviation_Museum');
//var spaceCentWiki = new wikiDesc('Kennedy_Space_Center');
//var wonderWorkWiki = new wikiDesc('WonderWorks_(museum)');

//creating FL ENTERTAINMENT attraction object
var disneyWorld = new attraction("Walt Disney World", {lat: 28.4186, lng: -81.5811});
var buschGard = new attraction("Busch Gardens Tampa", {lat: 28.0379, lng: -82.4216});
var univStudio = new attraction("Universal Studios", {lat: 28.4759, lng: -81.4687});
var disCove = new attraction("Discovery Cove", {lat: 28.4054, lng: -81.4617});
var epcot = new attraction("Epcot", {lat:28.3710 , lng: -81.5500});

//adding the FL ENTERTAINMENT attraction objects to the state object
florida.interests.entertainment.top1 = disneyWorld;
florida.interests.entertainment.top2 = buschGard;
florida.interests.entertainment.top3 = univStudio;
florida.interests.entertainment.top4 = disCove;
florida.interests.entertainment.top5 = epcot;

//creating FL ENTERTAINMENT Wiki Search Terms
//var disneyWorldWiki = new wikiDesc('Walt_Disney_World');
//var buschGardWiki = new wikiDesc('Busch_Gardens_Tampa');
//var univStudioWiki = new wikiDesc('Universal_Parks_%26_Resorts');
//var disCoveWiki = new wikiDesc('Discovery_Cove');
//var epcotWiki = new wikiDesc('Epcot');

//creating FL LANDMARKS attraction object
var overHigh = new attraction("Overseas Highway", {lat: 24.7836, lng: -80.9033});
var keyWest = new attraction("Key West", {lat: 24.5592, lng: -81.7840});
var bokTower = new attraction("Bok Tower Gardens", {lat: 27.9353, lng: -81.5775});
var bridgeLion = new attraction("Bridge of Lions", {lat: 29.8925, lng: -81.3075});
var plazaFerd = new attraction("Plaza Ferdinand VII", {lat: 30.4075, lng: -87.2139});

//adding the FL LANDMARKS attraction objects to the state object
florida.interests.landmarks.top1 = overHigh;
florida.interests.landmarks.top2 = keyWest;
florida.interests.landmarks.top3 = bokTower;
florida.interests.landmarks.top4 = bridgeLion;
florida.interests.landmarks.top5 = plazaFerd;

//creating FL LANDMARKS Wiki Search Terms
//var overHighWiki = new wikiDesc('Overseas_Highway');
//var keyWestWiki = new wikiDesc('Key_West,_Florida');
//var bokTowerWiki = new wikiDesc('Bok_Tower_Gardens');
//var bridgeLionWiki = new wikiDesc('Bridge_of_Lions');
//var plazaFredWiki = new wikiDesc('Plaza_Ferdinand_VII');

//creating FL NATURE attraction object
var everGlade = new attraction("EverGlades", {lat: 25.3167, lng: -80.9333});
var dryTort = new attraction("Dry Tortugas", {lat: 24.6286, lng: -82.8733});
var aerialAdv = new attraction("Aerial Adventure Park", {lat: 28.295922, lng: -81.59056});
var flCavern = new attraction("Florida Caverns State Park", {lat: 30.8139, lng: -85.2331});
var fallWater = new attraction("Falling Waters State Park", {lat: 30.7281, lng: -85.5286});

//adding the FL NATURE attraction objects to the state object
florida.interests.nature.top1 = everGlade;
florida.interests.nature.top2 = dryTort;
florida.interests.nature.top3 = aerialAdv;
florida.interests.nature.top4 = flCavern;
florida.interests.nature.top5 = fallWater;

//creating FL NATURE Wiki Search Terms
//var everGladeWiki = new wikiDesc('Everglades_National_Park');
//var dryTortWiki = new wikiDesc('Dry_Tortugas_National_Park');
//var aerialAdvWiki = new wikiDesc('Adventure_park');
//var flCavernWiki = new wikiDesc('Florida_Caverns_State_Park');
//var fallWaterWiki = new wikiDesc('Falling_Waters_State_Park');

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




