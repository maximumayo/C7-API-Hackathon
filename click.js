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
        if ($('#destinationMenu .dropdown-button-text').text() == "Select a Destination" || $('#interestMenu .dropdown-button-text').text() == "Select an Interest") {
            return;
            console.log('prevented');
        }
        $('#interestModal').on('shown.bs.modal', function () { //Wait event for modal to show before adding google maps
            disney.postMap();
        });
        $('#interestModal').modal('show'); //shows modal

    });

});