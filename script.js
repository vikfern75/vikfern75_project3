document.addEventListener("DOMContentLoaded", function () {
  const questionButtons = document.querySelectorAll(".questionBtn");
  questionButtons.forEach(button => {
    button.addEventListener("click", function () {
      alert("If you have questions, contact me at:\nviktor.fernandez@example.com");
    });
  });
});

function initMap() {
  const center = { lat: 41.8781, lng: -87.6298 };
  const map = new google.maps.Map(document.getElementById("map"), { zoom: 12, center: center });

  // Marker + InfoWindow
  const marker = new google.maps.Marker({ position: center, map: map, title: "Chicago" });
  const infoWindow = new google.maps.InfoWindow({ content: "<h3>Chicago</h3><p>Welcome to the map!</p>" });
  marker.addListener("click", () => infoWindow.open(map, marker));

  // Circle overlay
  new google.maps.Circle({
    map: map,
    center: center,
    radius: 1500,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.2,
  });

  // Polygon
  const polygonCoords = [
    { lat: 41.88, lng: -87.63 },
    { lat: 41.875, lng: -87.62 },
    { lat: 41.87, lng: -87.64 }
  ];
  new google.maps.Polygon({ paths: polygonCoords, strokeColor: "#FF0000", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#FF0000", fillOpacity: 0.25, map: map });
}
