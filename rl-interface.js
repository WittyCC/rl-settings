var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#view-location').click(function() {
    var location = $('#location').val();
    $('#location').val("");
    $('.showView').text("You have chosen " + location + ".");

    $.get('https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + location + '&fov=90&heading=360&pitch=10&key=' + apiKey, function(response) {
    });
  });
});
