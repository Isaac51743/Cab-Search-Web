
$.getJSON( '/map', function(mdata) {
    let mymap = L.map('map').setView([ 42.36,-71.06], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);
    let myIcon = L.icon({
        iconUrl: '../static/markers/marker-icon-violet.png',
        iconSize: [20, 30],
        iconAnchor: [10, -15],
        popupAnchor: [0, 15]
    });
    for (i=0;i<mdata.length;i++){
        // L.marker(mdata[i],{opacity:0.5, icon:myIcon} ).addTo(mymap).bindPopup("Uber");
        L.circle(mdata[i],300, {stroke:false,color: 'red', fillColor: '#f03', fillOpacity: 0.4}).addTo(mymap).bindPopup("crime");
    }
});


