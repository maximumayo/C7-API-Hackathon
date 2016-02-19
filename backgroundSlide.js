/**
 * Created by trishameyer on 2/19/16.
 */
//Array of images which you want to show:
var images = ['images/redwood.jpg','images/brooklyn_bridge.jpg','images/alcatraz.jpg', 'images/disney_world.jpg', 'images/key_west.jpg'];

var nextimage=0;
$(document).ready(function(){
    doSlideshow();
});

function doSlideshow(){
    if(nextimage>=images.length){
        nextimage=0;
    }
    $('body')
        .css('background-image','url("'+images[nextimage++]+'")')
        .fadeIn(5000, function(){
            setTimeout(doSlideshow,10000)
        });

}