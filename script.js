// Initialize Google Map
function initMap() {
    const mapDiv = document.getElementById("map");
    if (mapDiv) {
        const chicago = { lat: 41.8781, lng: -87.6298 };
        const map = new google.maps.Map(mapDiv, {
            zoom: 12,
            center: chicago
        });
        const marker = new google.maps.Marker({
            position: chicago,
            map: map,
            title: "Chicago, IL"
        });
    }
}

// Initialize buttons
function initButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Feel free to ask any questions!");
        });
    });
}

// Run on page load
window.onload = function() {
    initMap();
    initButtons();
};
