// Button click alert
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('questionButton');
    if (btn) {
        btn.addEventListener('click', () => {
            alert("If you have questions, contact me at:\nvfernandez@illinoistech.edu");
        });
    }
});

// Google Maps initialization
function initMap() {
    const chicago = { lat: 41.8781, lng: -87.6298 };
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
        const map = new google.maps.Map(mapDiv, {
            zoom: 12,
            center: chicago
        });
        new google.maps.Marker({
            position: chicago,
            map: map,
            title: "Chicago, IL"
        });
    }
}
