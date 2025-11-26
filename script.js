document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.question-button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("If you have questions, contact me at:\nvfernandez@illinoistech.edu");
        });
    });
});

function initMap() {
    const mapDiv = document.getElementById('map');
    if (!mapDiv) return;

    const chicago = { lat: 41.8781, lng: -87.6298 };
    const map = new google.maps.Map(mapDiv, {
        center: chicago,
        zoom: 12
    });

    new google.maps.Marker({ position: chicago, map: map, title: "Chicago, IL" });
}
