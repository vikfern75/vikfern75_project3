// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // Button click alerts: show email
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("For questions, email: vfernandez@illinoistech.edu");
        });
    });

    // Initialize Leaflet map only if map exists
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
        const chicago = [41.8781, -87.6298];
        const map = L.map('map').setView(chicago, 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker(chicago).addTo(map)
            .bindPopup('Chicago, IL')
            .openPopup();
    }

});
