/* @constructor
 * params: name
 */

var state = function(name) {
    this.name = name;
    this.food = {};
    this.historical = {};
    this.kids = {};
    this.nature = {};
    this.tourist = {};
};

/* @constructor
 * params:
 * location: the google maps coordinates
 * photos: an array of photo urls
 */
var attraction = function(name, location, photos) {
    this.name = name;
    this.location = location;
    this.photos = photos;

    //this adds the name of the attraction to the modal
    this.postName = function() {
        $('.page-header.header').text(this.name);
    };

    //this will be the function that adds maps to a page
    this.postMap = function(){
        console.log("I posted the map woohoo");
    };

    //this will be the function that adds photos to a page
    this.postPhotos = function(){//this function will loop through photo array and append them to modal
        console.log("I posted a photo woohoo");
    };
};

//creating state object
var california = new state("California");

//creating attraction object
var yosemite = new attraction("Yosemite National Park");

//adding the attraction object to the state object
california.historical.top1 = yosemite;

/*
 This is what a state object would look like:

 california = {
    name: 'California',
    historical: {
        top1: {} //this object here is the yosemite object we created
    }
    food: {},
    kids: {},
    nature: {},
    tourist: {}

 }

 */
