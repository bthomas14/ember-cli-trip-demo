import Ember from 'ember';

export default Ember.Component.extend({
  map: null,
  gotLatLng: false,
  /*
  didInsertElement: function() {
    console.log('in show-map didInsertElement()');
    // Initialize geocoder
    var geocoder = new google.maps.Geocoder();

    var address = this.address;
    console.log('address => ' + address);
    var that = this;
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log("geocoder successful!");
        //this.set('latitude', results.geometry.location.lat);
        //this.set('longitude', results.geometry.location.lng);
        //var latitude = results[0].geometry.location.A;
        //var longitude = results[0].geometry.location.F;
        that.set('latitude', results[0].geometry.location.A);
        that.set('longitude', results[0].geometry.location.F);
        var loc = new google.maps.LatLng(that.get('latitude'), that.get('longitude'));
        console.log('lat => ' + that.get('latitude') + ', lng => ' + that('longitude'));

        var mapOptions = {
          center: loc,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(that.$().get(0), mapOptions);

        var marker = new google.maps.Marker({
          position: loc,
          map: map,
          draggable: false
        });
        that.set('map', map); //save for future updates
        that.set("marker", marker);

        that.$().css({
          width: "100%",
          height: "200px"
        });
      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  },*/





  

});
