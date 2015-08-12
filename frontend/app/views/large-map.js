import Ember from 'ember';

export default Ember.View.extend({
  //templateName: 'views/large-map',
  map: null,
  markers: {},
  geocoder: null,
  selectedMarker: null,

  /*didInsertElement: function() {
    console.log('largeMapView.didInsertElement called');

    // initialize geocoder & map, then call rerenderMap().
    // Don't set center for map, as this will be set based on array of latlngbounds
    this.set('geocoder', new google.maps.Geocoder());
    var mapOptions = {
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.set('map', new google.maps.Map(this.$().get(0), mapOptions)); //save for future updates
    this.reRenderMap();

    // css styling for map
    this.$().css({
      display: "block",
      top: "18.75px",
      right: "12px"
    });
  },

  reRenderMap: function() {
    console.log('re-rendering map');

    // setup latLng bounds for map
    var bounds = new google.maps.LatLngBounds();
    var map = this.get('map');
    var locs = new Array();
    var that = this;

    // loop through each object in the array places, which was passed in with view
    this.places.forEach(function(place, i) {
      // call geocoder and when success call is returned, initiate code inside loop
      that.get('geocoder').geocode({'address': place.get('address') }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log("geocoder successful!");

          // pass in lat & lng from results array for each place location & push on to locs array
          var loc = new google.maps.LatLng(results[0].geometry.location.A, results[0].geometry.location.F);
          locs.push(loc);

          // Fit the latlng to map bounds
          bounds.extend(loc);
          map.fitBounds(bounds);

          // create a marker for the current place lat & lng
          var marker = new google.maps.Marker({
            position: loc,
            map: map,
            scrollwheel: false,
            draggable: false,
            title: place.get('name'),
            icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });

          // set markers array item with index = place id to current marker
          that.markers[place.get('id')] = marker;

          console.log("place " + i + ": " + place.get('name'));
        } else {
          console.log("Geocode was not successful for the following reason: " + status);
        }
      });
    });

    // Adjust zoom
    var zoom = map.getZoom();
    console.log("zoom is "+ zoom);
    map.setZoom(zoom > 12 ? 12 : zoom);

    // resize trigger: necessary?
    google.maps.event.trigger(map, 'resize');
    map.setZoom(map.getZoom());

  }.observes('places.@each'),

  highlightMarker: function() {
    console.log('markerId ' + this.get('controller').get('selectedMarker') + ' was updated');
    // loop through markers array, and where id matches that of selectedMarker id
    // replace red marker with yellow. Otherwise, marker will be red
    for (var key in this.markers) {
      if (key === this.get('controller').get('selectedMarker')) {
        this.markers[key].set('icon', 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
      } else {
        this.markers[key].set('icon', 'https://maps.google.com/mapfiles/ms/icons/red-dot.png');
      }
    }
  }.observes('controller.selectedMarker')*/ // watch for selectedMarker change on regionController

  reRenderMap: function() {
    console.log('re-rendering map');
    var mapOptions = {
      zoom: 15,
      draggable: true,
      panControl: true,
      zoomControl: true,
      scrollwheel: false,
      //optimized: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(this.$().get(0), mapOptions);
    this.set('map', map); //save for future updates

    var bounds = new google.maps.LatLngBounds();

    var locs = new Array();

    for (var i = 0; i < 50; i++) {
      if (this.places.objectAt(i) == null) {
        break;
      }
      var place = this.places.objectAt(i);
      if (place.get('latitude') == null) {
        console.log("listing: " + place.get('name') + " has no location");
        continue;
      }

      var loc = new google.maps.LatLng(place.get('latitude'), place.get('longitude'));
      bounds.extend(loc);
      locs.push(loc);

      var marker = new google.maps.Marker({
        position: loc,
        map: map,
        scrollwheel: false,
        draggable: false,
        title: place.get('name'),
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        contentString: '<div id="content">'+
          '<h5 id="firstHeading" class="firstHeading">' + this.title + '</h5>'+
          '<div id="bodyContent">'+
          '<p></p>'+
          '</div>'+
          '</div>'
      });
      //this.set("marker" + i, marker);
      this.markers[place.get('id')] = marker;

      var infowindow = new google.maps.InfoWindow({
          content: marker.contentString
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
        marker.icon = 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
      });

      console.log("listing " + i + ": " + place.get('name') + ", lat: " + place.get('latitude') + ", lon: " + place.get('longitude'));
    }

    //  Fit these bounds to the map
    map.fitBounds(bounds);
    //  Adjust zoom
    var zoom = map.getZoom();
    //console.log("zoom is "+ zoom)
    map.setZoom(zoom > 18 ? 18 : zoom);

    // resize trigger: necessary?
    google.maps.event.trigger(map, 'resize');
    map.setZoom(map.getZoom());

  }.observes('places.@each'),

  didInsertElement: function() {
    //console.log('largeMapView.didInsertElement called');
    this.reRenderMap();
    this.$().css({
      display: "block",
      top: "0px",
      right: "12px"
    });
  },

  highlightMarker: function() {
    console.log('selectedMarker ' + this.get('selectedMarker') + ' was updated');
    for (var key in this.markers) {
      if (key == this.get('selectedMarker')) {
        console.log("Marker #" + key + " is a yellow marker.");
        this.markers[key].set('icon', 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
      } else {
        console.log("Marker #" + key + " is a red marker.");
        this.markers[key].set('icon', 'https://maps.google.com/mapfiles/ms/icons/red-dot.png');
      }
    }
  }.observes('selectedMarker'),

  /*infoWindow: function() {
    var contentString = '<div id="content">'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p></p>'+
      '</div>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
  }.observes('marker').on('click')*/

});
