$(document).ready(function () {
    //click handler for the destination dropdown menu
    $('#destination-dropdown.dropdown').on('click', '.dropdown-menu li a', function () {
        var value = $(this).text();
        $('#desinationMenu .dropdown-button-text').text(value);
    });

    //click handler for the interests dropdown menu
    $('#interest-dropdown.dropdown').on('click', '.dropdown-menu li a', function () {
        var value = $(this).text();
        $('#interestMenu .dropdown-button-text').text(value);
    });

    $('.submit').on('click', function () {

        var stateName = $('#desinationMenu .dropdown-button-text').text();
        var interestName = $('#interestMenu .dropdown-button-text').text();

        //changes the title of the modal to the state that was selected
        $('.modal-title').text(stateName);

        //changes the tab in the modal to the interest that was selected
        $('.active').removeClass('active'); //removes active class on default active tab
        var interestDiv = interestName.toLowerCase() + 'Div'; //creates a string of the id name based on the value of the interest dropdown menu
        $('#'+interestDiv).addClass('active'); //adds class active to the div that holds the interest's content
        $('a[href="#'+ interestDiv +'"]').parent().addClass('active'); //adds class active to the li of the interest's tab


        $('#interestModal').on('shown.bs.modal', function () { //Wait event for modal to show before adding google maps
            disney.postMap();
        });
        $('#interestModal').modal('show'); //shows modal
    });
});