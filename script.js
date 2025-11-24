// js/script.js
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // Attach listener to all question buttons found on the page
    var qIds = ['question-btn', 'question-btn-2', 'question-btn-3', 'question-btn-map'];
    qIds.forEach(function (id) {
      var btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', function () {
          alert('If you have questions, contact me at:\nviktor.fernandez@example.com');
        });
      }
    });
  });

  // Global for Google Maps callback
  window.initMap = function () {
    try {
      var center = { lat: 41.8781, lng: -87.6298 }; // Chicago sample center

      var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 12
      });

      // Feature 1: Multiple markers with InfoWindows
      var markers = [
        { pos: { lat: 41.889, lng: -87.632 }, title: 'Location A', content: '<h3>Location A</h3><p>Example info A</p>' },
        { pos: { lat: 41.875, lng: -87.620 }, title: 'Location B', content: '<h3>Location B</h3><p>Example info B</p>' }
      ];
      var bounds = new google.maps.LatLngBounds();
      markers.forEach(function (m) {
        var marker = new google.maps.Marker({ position: m.pos, title: m.title, map: map });
        var iw = new google.maps.InfoWindow({ content: m.content });
        marker.addListener('click', function () { iw.open(map, marker); });
        bounds.extend(m.pos);
      });

      // Feature 2: Circle overlay (e.g., service area)
      var circle = new google.maps.Circle({
        map: map,
        center: center,
        radius: 2500, // meters
        strokeColor: '#FF0000',
        strokeOpacity: 0.35,
        strokeWeight: 2,
        fillColor: '#FFCCCC',
        fillOpacity: 0.10
      });

      // Extend bounds to include circle area
      bounds.union(circle.getBounds());

      // Feature 3: Polygon (example boundary)
      var polyCoords = [
        { lat: 41.886, lng: -87.640 },
        { lat: 41.886, lng: -87.615 },
        { lat: 41.870, lng: -87.615 },
        { lat: 41.870, lng: -87.640 }
      ];
      var polygon = new google.maps.Polygon({
        paths: polyCoords,
        strokeColor: '#0000FF',
        strokeOpacity: 0.6,
        strokeWeight: 2,
        fillColor: '#0000FF',
        fillOpacity: 0.08,
        map: map
      });

      polyCoords.forEach(function (p) { bounds.extend(p); });

      // Fit the map to show all features
      map.fitBounds(bounds);

    } catch (e) {
      console.error('initMap error:', e);
    }
  };

})();
