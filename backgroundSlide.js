/**
 * Created by trishameyer on 2/19/16.
 */
//Array of images which you want to show:
var images = ['images/redwood.jpg','images/brooklyn_bridge.jpg','images/alcatraz.jpg', 'images/disney_world.jpg', 'images/key_west.jpg'];

var nextimage=0; //declares the variable nextimage and sets it equal to 0
$(document).ready(function(){
    doSlideshow(); //when the document is ready it calls the the doSlideshow function to start the pics rotating in the body of the document
});

function doSlideshow(){
    if(nextimage>=images.length){ //checks if the variable nextimage is greater or equal to the length of the images array and if it is...it will reset the nextimage var to 0 so it starts the 'slideshow' over again
        nextimage=0;
    }
    $('body')
        .css('background-image','url("'+images[nextimage++]+'")') //adds css for background image to the body of the code for each image successively and increments the nextimage variable
        .fadeIn(5000, function(){ //supposed to fade in for 5s and stay showing until 10s but the fadeIn doesn't work like I thought it would
            setTimeout(doSlideshow,10000); //sets the time of photo to 10s for viewing
        });

} //then repeats the process with each image