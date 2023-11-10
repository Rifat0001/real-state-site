
var searchInput = 'loc';

$(document).ready(function () {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
        /*componentRestrictions: {
    country: "USA"
        }*/
    });

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        } else {
            let lat1 = place.geometry.location.lat();
            let lng1 = place.geometry.location.lng();
            let markerOptions = {
                position: { lat: lat1, lng: lng1 }
            }

            let marker = new google.maps.Marker(markerOptions)

            let mapOptions = {
                center: { lat: lat1, lng: lng1 },
                zoom: 18,
                draggable: true,
                mapTypeId: 'satellite'
            }
            let map = new google.maps.Map(document.getElementById('map'), mapOptions);

            map.setTilt(45)
            marker.setMap(map)
        }

    });
});
