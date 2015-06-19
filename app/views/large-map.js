import Ember from 'ember';

export default Ember.View.extend({
  //templateName: 'views/large-map',
  map: null,
  listings: null,
  selectedMarker: null,
  markers: {},
  geocoder: null,

  didInsertElement: function() {
    console.log('largeMapView.didInsertElement called');
    //var geocoder = new google.maps.Geocoder();
    this.set('geocoder', new google.maps.Geocoder());
    var mapOptions = {
      zoom: 8,
      //center: new google.maps.LatLng(48.1333, 11.5667),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.set('map', new google.maps.Map(this.$().get(0), mapOptions)); //save for future updates

    this.reRenderMap();
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

    this.activities.forEach(function(activity, i) {
      that.get('geocoder').geocode({'address': activity.get('address') }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          console.log("geocoder successful!");
          // pass in lat & lng from results array for each activity location
          var loc = new google.maps.LatLng(results[0].geometry.location.A, results[0].geometry.location.F);
          // Fit the latlng to map bounds
          bounds.extend(loc);
          map.fitBounds(bounds);
          console.log(bounds.extend(loc));
          locs.push(loc);
          var marker = new google.maps.Marker({
            position: loc,
            map: map,
            scrollwheel: false,
            draggable: false,
            title: activity.get('name'),
            icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });

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

  setMarkers: function() {

  },

  highlightMarker: function() {
    console.log('selectedMarker ' + this.get('selectedMarker') + ' was updated');
    for (var key in this.markers) {
      if (key == this.get('selectedMarker')) {
        this.markers[key].set('icon', 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
      } else {
        this.markers[key].set('icon', 'https://maps.google.com/mapfiles/ms/icons/red-dot.png');
      }
    }
  }.observes('selectedMarker')


});
