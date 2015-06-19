import Ember from 'ember';

export default Ember.View.extend({
  //templateName: 'views/large-map',
  map: null,
  selectedMarker: null,
  markers: {},
  geocoder: null,

  didInsertElement: function() {
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

    // loop through each object in the array activities, which was passed in with view
    this.activities.forEach(function(activity, i) {
      // call geocoder and when success call is returned, initiate code inside loop
      that.get('geocoder').geocode({'address': activity.get('address') }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          console.log("geocoder successful!");

          // pass in lat & lng from results array for each activity location & push on to locs array
          var loc = new google.maps.LatLng(results[0].geometry.location.A, results[0].geometry.location.F);
          locs.push(loc);

          // Fit the latlng to map bounds
          bounds.extend(loc);
          map.fitBounds(bounds);

          // create a marker for the current activity lat & lng
          var marker = new google.maps.Marker({
            position: loc,
            map: map,
            scrollwheel: false,
            draggable: false,
            title: activity.get('name'),
            icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });

          // set markers array item with index = activity id to current marker
          that.markers[activity.get('id')] = marker;

          console.log("activity " + i + ": " + activity.get('name'));
        } else {
          console.log("Geocode was not successful for the following reason: " + status);
        }
      });
    });

    // Adjust zoom
    var zoom = map.getZoom();
    console.log("zoom is "+ zoom)
    map.setZoom(zoom > 12 ? 12 : zoom);

    // resize trigger: necessary?
    google.maps.event.trigger(map, 'resize');
    map.setZoom(map.getZoom());

  }.observes('activities.@each'),

  highlightMarker: function() {
    console.log('markerId ' + this.get('controller').get('selectedMarker') + ' was updated');
    // loop through markers array, and where id matches that of selectedMarker id
    // replace red marker with yellow. Otherwise, marker will be red
    for (var key in this.markers) {
      if (key == this.get('controller').get('selectedMarker')) {
        this.markers[key].set('icon', 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
      } else {
        this.markers[key].set('icon', 'https://maps.google.com/mapfiles/ms/icons/red-dot.png');
      }
    }
  }.observes('controller.selectedMarker') // watch for selectedMarker change on regionController


});
