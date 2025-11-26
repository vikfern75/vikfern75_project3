// Run code after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // QUESTIONS BUTTON ALERT
    const questionButtons = document.querySelectorAll('.question-button');
    questionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("If you have questions, contact me at:\nvfernandez@illinoistech.edu");
        });
    });

    // INIT GOOGLE MAP (only for map.html)
    if (document.getElementById('map')) {
        initMap();
    }
});

// GOOGLE MAP INITIALIZATION
function initMap() {
    const chicago = { lat: 41.8781, lng: -87.6298 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: chicago
    });

    // MARKER
    const marker = new google.maps.Marker({
        position: chicago,
        map: map,
        title: "Chicago, IL"
    });

    // Example features beyond base map:
    // 1. InfoWindow
    const infoWindow = new google.maps.InfoWindow({
        content: "<h3>Chicago, IL</h3><p>Welcome to Chicago!</p>"
    });
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    // 2. Circle overlay
    const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: chicago,
        radius: 5000
    });

    // 3. Zoom changed event listener
    map.addListener('zoom_changed', () => {
        console.log("Map zoom level changed to:", map.getZoom());
    });
}
