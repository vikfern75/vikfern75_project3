document.addEventListener("DOMContentLoaded", () => {
    // Add event listener to all “Questions?” buttons on all pages
    const questionButtons = document.querySelectorAll("button.questions");

    questionButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("If you have questions, contact me at:\nvikfern75@gmail.com");
        });
    });
});

// Google Maps API callback
function initMap() {
    const centerPoint = { lat: 28.5384, lng: -81.3789 }; // Orlando example

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: centerPoint,
    });

    // 1️⃣ Marker
    const marker = new google.maps.Marker({
        position: centerPoint,
        map: map,
        title: "Center Marker"
    });

    // 2️⃣ InfoWindow
    const infoWindow = new google.maps.InfoWindow({
        content: "<h3>Welcome to Orlando!</h3><p>This is the center point.</p>"
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });

    // 3️⃣ Circle Around Marker
    new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.15,
        map,
        center: centerPoint,
        radius: 2000
    });
}
