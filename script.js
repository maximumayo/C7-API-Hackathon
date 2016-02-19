//var yosemite;
//var joshuatree;
//var tahoe;
//var redwood;
//var sequoia;
//var caNatureArray = [yosemite, joshuatree, tahoe, redwood, sequoia];

//var griffith;
//var huntington;
//var getty;
//var railroad;
//var artwalk;
//var caCultureArray = [griffith, huntington, getty, railroad, artwalk];
//var goldenGate;


//Yosemite image
//$(document).ready(function () {

//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=gregwest98&text=yosemite&id=3568189163',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[0].farm;
//            var id = global_result.photos.photo[0].id;
//            var secret = global_result.photos.photo[0].secret;
//            var server = global_result.photos.photo[0].server;

//            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );

//            yosemite = $('<img>').attr('src', url);
//            $("body").append(yosemite);
//        }
//    });
//});

////Joshua Tree image
//$(document).ready(function() {
//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=20104370@N05&tag_mode=all&tags=joshuatreenationalparkca, sunset',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[0].farm;
//            var id = global_result.photos.photo[0].id;
//            var secret = global_result.photos.photo[0].secret;
//            var server = global_result.photos.photo[0].server;
//            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
//            joshuatree = $('<img>').attr('src', url);
//            $("body").append(joshuatree);
//        }
//    });
//});
//
////Redwood National Park image
//$(document).ready(function() {
//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=thepretender&tag_mode=all&tags=redwood national park',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[1].farm;
//            var id = global_result.photos.photo[1].id;
//            var secret = global_result.photos.photo[1].secret;
//            var server = global_result.photos.photo[1].server;
//            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
//            redwood = $('<img>').attr('src', url);
//            $("body").append(redwood);
//        }
//    });
//});
//
////Sequoia National Park image
//$(document).ready(function() {
//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=37287613@N02&tag_mode=all&tags=Sequoia National Park',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[7].farm;
//            var id = global_result.photos.photo[7].id;
//            var secret = global_result.photos.photo[7].secret;
//            var server = global_result.photos.photo[7].server;
//            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
//            sequoia = $('<img>').attr('src', url);
//            $("body").append(sequoia);
//        }
//    });
//});
//
//
////Lake Tahoe image
//$(document).ready(function() {
//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=zvines&tag_mode=all&tags=Lake Tahoe, Sand Harbor',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[1].farm;
//            var id = global_result.photos.photo[1].id;
//            var secret = global_result.photos.photo[1].secret;
//            var server = global_result.photos.photo[1].server;
//            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
//            tahoe = $('<img>').attr('src', url);
//            $("body").append(tahoe);
//        }
//    });
//});
//
//
////Griffith Observatory Image
//$(document).ready(function() {
//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=40928097@N07&tag_mode=all&tags=Griffith Observatory',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[0].farm;
//            var id = global_result.photos.photo[0].id;
//            var secret = global_result.photos.photo[0].secret;
//            var server = global_result.photos.photo[0].server;
//            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
//            griffith = $('<img>').attr('src', url);
//            $("body").append(griffith);
//        }
//    });
//});

//Huntington Library Image
//$(document).ready(function () {
//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=35973104@N05&tag_mode=all&tags=Huntington Gardens',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[5].farm;
//            var id = global_result.photos.photo[5].id;
//            var secret = global_result.photos.photo[5].secret;
//            var server = global_result.photos.photo[5].server;
//            var url = ('https://farm' + farm + '.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
//            huntington = $('<img>').attr('src', url);
//            $("body").append(huntington);
//        }
//    });
//});

////Getty Center Image
//$(document).ready(function() {
//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=fullframephotographs&tag_mode=all&tags=getty, center',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[0].farm;
//            var id = global_result.photos.photo[0].id;
//            var secret = global_result.photos.photo[0].secret;
//            var server = global_result.photos.photo[0].server;
//            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
//            getty = $('<img>').attr('src', url);
//            $("body").append(getty);
//        }
//    });
//});
//
////California Railroad Museum
//$(document).ready(function() {
//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=80651083@N00&tag_mode=all&tags=OERM, locomotive, 200612, diesel, Railfan, Railfanning',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[1].farm;
//            var id = global_result.photos.photo[1].id;
//            var secret = global_result.photos.photo[1].secret;
//            var server = global_result.photos.photo[1].server;
//            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
//            railroad = $('<img>').attr('src', url);
//            $("body").append(railroad);
//        }
//    });
//});
//
//
////LA Artwalk Image
//$(document).ready(function() {
//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=brianswansonphotography&tag_mode=all&tags=Art Walk, downtown la',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[1].farm;
//            var id = global_result.photos.photo[1].id;
//            var secret = global_result.photos.photo[1].secret;
//            var server = global_result.photos.photo[1].server;
//            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
//            artwalk = $('<img>').attr('src', url);
//            $("body").append(artwalk);
//        }
//    });
//});
//
////Golden Gate Bridge
//$(document).ready(function() {
//    $.ajax({
//        datatype: 'json',
//        method: "get",
//        url: 'https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=6cf32b7431855ee07e7a0749b21399b2&format=json&nojsoncallback=1&per_page=500&user_id=joe_defao&tag_mode=all&tags=Golden, Gate, Bridge',
//        success: function (result) {
//            console.log('ajax was a success' + result);
//
//            global_result = result;
//
//            var farm = global_result.photos.photo[0].farm;
//            var id = global_result.photos.photo[0].id;
//            var secret = global_result.photos.photo[0].secret;
//            var server = global_result.photos.photo[0].server;
//            var url = ('https://farm' + farm +'.staticflickr.com/' + server + "/" + id + "_" + secret + '.jpg' );
//            goldenGate = $('<img>').attr('src', url);
//            $("body").append(goldenGate);
//        }
//    });
//});

