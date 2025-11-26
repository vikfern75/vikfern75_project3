// Initialize Google Map
function initMap() {
    const chicago = { lat: 41.8781, lng: -87.6298 };
    const mapDiv = document.getElementById("map");

    if (mapDiv) {
        const map = new google.maps.Map(mapDiv, {
            center: chicago,
            zoom: 12,
            mapTypeControl: true, // Extra feature: map type control
            zoomControl: true     // Extra feature: custom zoom control
        });

        // Marker 1: Chicago downtown
        const marker1 = new google.maps.Marker({
            position: chicago,
            map: map,
            title: "Chicago, IL"
        });

        const info1 = new google.maps.InfoWindow({
            content: "<h3>Chicago, IL</h3><p>The Windy City!</p>"
        });

        marker1.addListener("click", () => {
            info1.open(map, marker1);
        });

        // Marker 2: Willis Tower
        const willisTower = { lat: 41.8789, lng: -87.6359 };
        const marker2 = new google.maps.Marker({
            position: willisTower,
            map: map,
            title: "Willis Tower"
        });

        const info2 = new google.maps.InfoWindow({
            content: "<h3>Willis Tower</h3><p>Iconic skyscraper in Chicago.</p>"
        });

        marker2.addListener("click", () => {
            info2.open(map, marker2);
        });

        // Extra feature: Circle around downtown
        const cityCircle = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.1,
            map: map,
            center: chicago,
            radius: 2000
        });
    }
}

// Questions button alert
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".question-button");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("If you have questions, contact me at: vfernandez@illinoistech.edu");
        });
    });
});
