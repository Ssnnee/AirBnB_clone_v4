$(document).ready(function () {
    console.log('ready');
    const amenities = {};
    const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';

    $('input[type="checkbox"]').change(function () {
        if ($(this).is(':checked')) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenities[$(this).attr('data-id')];
        }
        $('div.amenities h4').text(Object.values(amenities).join(', '));
    });

    $.get(url, function (data) {
        if (data.status === 'OK') {
            $('DIV#api_status').addClass('available');
        } else {
            $('DIV#api_status').removeClass('available');
        }
    });

    $.ajax({
        type: 'POST',
        url: 'http://' + window.location.hostname + ':5001/api/v1/places_search/',
        contentType: 'application/json',
        data: '{}',
        success: function (data) {
            for (let place of data) {
                let html = '<article><div class="title"><h2>' + place.name + '</h2><div class="price_by_night">$' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + ' Guest';
                if (place.max_guest !== 1) {
                    html += 's';
                }
                html += '</div><div class="number_rooms">' + place.number_rooms + ' Bedroom';
                if (place.number_rooms !== 1) {
                    html += 's';
                }
                html += '</div><div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom';
                if (place.number_bathrooms !== 1) {
                    html += 's';
                }
                html += '</div></div><div class="description">' + place.description + '</div></article>';
                $('section.places').append(html);
            }
        }
    });
});
