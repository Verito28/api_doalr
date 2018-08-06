$(document).ready(function(){

	 


	var url = '//https://api.darksky.net/forecast/';
	var key = '8909e31868b4d179661cafae34afb2c3';
	var coords = {
		scl: '-33.4488897,-70.6692655',
		ccp: '-36.8201352,-73.0443904',
		lsc: '-29.9026691,-71.25193739999997'
	}

	var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      };

	$('#select').on('change', function(){
		$.ajax({
			url: url + key + '/' + coords[$(this).val()],
			method:'GET',
			dataType:'JSONP'
		}).then(function(data){
			console.log(data);
		});
	})
});