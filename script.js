/**
 * Created by jaisonamos on 2/18/16.
 */
var global_result;
$(document).ready(function() {
    $.ajax({
        datatype: 'json',
        method: "get",
        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&text=newyork',

        success: function (result) {
            console.log('ajax was a success' + result);

            global_result = result;

            var farm = global_result.photos.photo[0].farm;
            var id = global_result.photos.photo[0].id;
            var secret = global_result.photos.photo[0].secret;
            var server = global_result.photos.photo[0].server;
            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
            console.log(url);

            var img = $('<img>').attr('src', url);
            $("body").append(img);




        }
    });

});