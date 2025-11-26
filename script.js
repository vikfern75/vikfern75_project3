document.addEventListener('DOMContentLoaded', function() {
    // Questions button
    const buttons = document.querySelectorAll('.question-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('If you have questions, contact me at:\nvfernandez@illinoistech.edu');
        });
    });

    // Google Map
    const mapDiv = document.getElementById('map');
    if(mapDiv) {
        const chicago = { lat: 41.8781, lng: -87.6298 };
        const map = new google.maps.Map(mapDiv, {
            zoom: 12,
            center: chicago,
            mapTypeId: 'roadmap'
        });

        const marker = new google.maps.Marker({
            position: chicago,
            map: map,
            title: 'Chicago, IL'
        });

        const infoWindow = new google.maps.InfoWindow({
            content: '<strong>Chicago, IL</strong>'
        });
        marker.addListener('click', () => infoWindow.open(map, marker));

        new google.maps.Circle({
            center: chicago,
            map: map,
            radius: 5000,
            fillColor: '#FF0000',
            fillOpacity: 0.2,
            strokeColor: '#FF0000'
        });

        map.addListener('click', function(e) {
            alert(`You clicked at coordinates: ${e.latLng.lat().toFixed(4)}, ${e.latLng.lng().toFixed(4)}`);
        });
    }
});
