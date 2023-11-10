
function initMap() {
    const success = (position) => {

        let markerOptions = {
            position: { lat: position['coords']['latitude'], lng: position['coords']['longitude'] }
        }

        let marker = new google.maps.Marker(markerOptions)

        let mapOptions = {
            center: { lat: position['coords']['latitude'], lng: position['coords']['longitude'] },
            zoom: 18,
            draggable: true,
            mapTypeId: 'satellite'
        }
        let map = new google.maps.Map(document.getElementById('map'), mapOptions);

        map.setTilt(45)
        marker.setMap(map)

    }

    const error = () => {
        console.log("Error");
    }

    navigator.geolocation.getCurrentPosition(success, error)



}

