function initMap() {
        var lokacija = {lat: 45.261251, lng: 19.831905};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: lokacija
        });
        var marker = new google.maps.Marker({
          position: lokacija,
          map: map
        });
      }
	  