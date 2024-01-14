$(document).ready(function () {
    const amenityIdDict = {};
    $('input[type=checkbox]').change(function () {
        if ($(this).is(':checked')) {
            amenityIdDict[$(this).attr('data-id')] = $(this).attr('data-name');
            console.log(amenityIdDict);
        } else {
            delete amenityIdDict[$(this).attr('data-id')];
            console.log(amenityIdDict);
        }
        $('.amenities h4').text(Object.values(amenityIdDict).join(', '));
    });
});
