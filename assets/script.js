var imageURLs = [
	"https://images.app.goo.gl/33vcPeawt5Azaxgk6",
	"https://images.app.goo.gl/rJpA6X9tE8jEcyY17",
	"https://images.app.goo.gl/78JunC2Rw8CPkvnJ9",
	"https://images.app.goo.gl/nLeaADWEs8fcJ8wGA",
];
function getImageTag() {
	var img = '<img src="';
	var randomIndex = Math.floor(Math.random() * imageURLs.length);
	img += imageURLs[randomIndex];
	img += '" alt="Some alt text"/>';
	return img;
}

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8,
	});
}
