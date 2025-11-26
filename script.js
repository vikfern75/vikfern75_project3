document.addEventListener('DOMContentLoaded', function() {
    // Questions button alert
    const buttons = document.querySelectorAll('.question-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Feel free to ask any questions! Email: vfernandez@illinoistech.edu');
        });
    });

    // Leaflet map (only for map.html)
    const mapDiv = document.getElementById('map');
    if(mapDiv) {
        const map = L.map('map').setView([41.8781, -87.6298], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([41.8781, -87.6298]).addTo(map)
            .bindPopup('Chicago, IL')
            .openPopup();
    }
});
