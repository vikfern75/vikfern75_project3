document.addEventListener('DOMContentLoaded', function () {
    // BUTTON ALERT
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            alert("For questions, email: vfernandez@illinoistech.edu");
        });
    });

    // LEAFLET MAP
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
        const map = L.map('map').setView([41.8781, -87.6298], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
        L.marker([41.8781, -87.6298])
            .addTo(map)
            .bindPopup('Chicago, IL')
            .openPopup();
    }
});
