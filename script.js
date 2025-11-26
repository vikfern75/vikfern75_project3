// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Questions button alert
  const buttons = document.querySelectorAll('.question-button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert("If you have questions, contact me at:\nvfernandez@illinoistech.edu");
    });
  });
});

// Google Maps initialization
function initMap() {
  const mapDiv = document.getElementById('map');
  if (!mapDiv) return; // Only run on map.html

  const chicago = { lat: 41.8781, lng: -87.6298 };
  
  const map = new google.maps.Map(mapDiv, {
    center: chicago,
    zoom: 12
  });

  // Feature 1: Marker with popup
  const marker = new google.maps.Marker({
    position: chicago,
    map: map,
    title: 'Chicago, IL'
  });

  const infoWindow = new google.maps.InfoWindow({
    content: '<h3>Chicago, IL</h3><p>Welcome to the Windy City!</p>'
  });

  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });

  // Feature 2: Circle around Chicago
  const cityCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.6,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.2,
    map: map,
    center: chicago,
    radius: 5000 // radius in meters
  });

  // Feature 3: Click event on map to show coordinates
  map.addListener('click', (event) => {
    const lat = event.latLng.lat().toFixed(4);
    const lng = event.latLng.lng().toFixed(4);
    alert(`You clicked at latitude: ${lat}, longitude: ${lng}`);
  });
}
