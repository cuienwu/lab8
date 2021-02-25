function initMap() {
	// add your code here
	/*L.mapquest.key = 'QyR5vVHIpk9hzkUrSI3bzcm6dOGXpquZ';*/

	L.mapquest.key = 'QyR5vVHIpk9hzkUrSI3bzcm6dOGXpquZ';

// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.87497819956424, -117.23773557792556],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12
	  /* map won't show up with zoomControl */
	  /*zoomControl: false*/
	});

	L.marker([32.87497819956424, -117.23773557792556]).addTo(map);
}
