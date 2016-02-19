$(document).ready(function () {
    //click handler for the destination dropdown menu
    $('#destination-dropdown.dropdown').on('click', '.dropdown-menu li a', function () {
        var value = $(this).text();
        $('#destinationMenu .dropdown-button-text').text(value);
    });

    //click handler for the interests dropdown menu
    $('#interest-dropdown.dropdown').on('click', '.dropdown-menu li a', function () {
        var value = $(this).text();
        $('#interestMenu .dropdown-button-text').text(value);
    });
    $('.submit').on('click', function () {
        $('#interestModal').on('shown.bs.modal', function () { //Wait event for modal to show before adding google maps
            disney.postMap();
        });
        $('#interestModal').modal('show'); //shows modal

    });



        $.ajax({
            datatype: 'json',
            method: "get",
            url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=disneyland&callback=?",
            contentType: "application/json; charset=utf-8",
            async: false,
            success: function (data,textStatus,jqXHR ) {
                console.log(url);
                console.log('ajax was a success' + data);

                //var markup = result.parse.text['*'];
                //var descriptionDiv = $('<div>').html(markup);
                //$("#cultureDiv").append(markup);


                var markup = data.parse.text["*"];
                console.log('markup' + markup);
                var blurb = $('<div></div>').html(markup);

                // remove links as they will not work
                blurb.find('a').css('font-weight', 'normal');

                blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });

                // remove any references
                //blurb.find('sup').remove();

                // remove cite error
                // blurb.find('.mw-ext-cite-error').remove();
                $('#article').html($(blurb).find('p:first'));

            },
            error: function (errorMessage) {
            }
        });


});