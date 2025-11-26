// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------
    // Button click alerts
    // -------------------------------
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Feel free to ask any questions!");
        });
    });

    // -------------------------------
    // Initialize Leaflet Map (if map exists)
    // -------------------------------
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
        const chicago = [41.8781, -87.6298]; // Latitude, Longitude
        const map = L.map('map').setView(chicago, 12);

        // OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Marker
        L.marker(chicago).addTo(map)
            .bindPopup('Chicago, IL')
            .openPopup();
    }

});
