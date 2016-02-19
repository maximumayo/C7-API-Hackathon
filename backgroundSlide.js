/**
 * Created by trishameyer on 2/19/16.
 */
//Array of images which you want to show: Use path you want.
var images = ['http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/08/Redwood-National-Park-California-Wallpapers-2560x1600.jpg','http://backgroundimagesfree.com/wp-content/uploads/2014/12/brooklyn_bridge_nyc-Wallpaper-HD-Desktop-Background.jpg','http://host2post.com/server13/bgs/l6/l61cbtromry80m~.jpg', 'https://wdpromedia.disney.go.com/media/campaigns/2/media/grandadventure/images/Offer-background.jpg', 'https://www.azamaraclubcruises.com/sites/default/files/heros/key-west-florida.jpg'];

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
        .fadeIn(2000, function(){
            setTimeout(doSlideshow,4000)
        });

}