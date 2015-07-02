import Ember from 'ember';

export default Ember.View.extend({
  map: null,
  latitude: null,
  longitude: null,

  didInsertElement: function() {
    console.log('in MapShowComponent.didInsertElement()');
    // Initialize geocoder
    var geocoder = new google.maps.Geocoder();
    console.log('address => ' + this.address);
    var address = this.name+", "+this.city+", "+this.country;
    var that = this;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log("geocoder successful!");
        //this.set('latitude', results.geometry.location.lat);
        //this.set('longitude', results.geometry.location.lng);
        var latitude = results[0].geometry.location.A;
        var longitude = results[0].geometry.location.F;
        var loc = new google.maps.LatLng(latitude, longitude);

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
          height: "400px"
        });
      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  },
/*
  geocode: function() {
    var geocoder = new google.maps.Geocoder();
    var address = this.address;
    console.log('address => ' + address);
    var that = this;
    console.log('in map.geocode()');
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log("geocoder successful!");
        that.set('latitude', results[0].geometry.location.A);
        that.set('longitude', results[0].geometry.location.F);
        //var latitude = results[0].geometry.location.A;
        //var longitude = results[0].geometry.location.F;
        //return latitude + ", " + longitude;
      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  }.on('didInsertElement'),

  insertMap: function() {
    //this.geocode(this.address);
    //console.log(this.geocode(this.address));
    var loc = new google.maps.LatLng(this.get('latitude'), this.get('longitude'));
    console.log('in map.insertMap()');
    var mapOptions = {
      //center: new google.maps.LatLng(-33.8665433, 151.1956316),
      center: loc,
      zoom: 15,
      //optimized: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(this.$().get(0), mapOptions);


    var marker = new google.maps.Marker({
      position: loc,
      map: map,
      draggable: false
    });
    this.set('map', map); //save for future updates
    this.set("marker", marker);

    this.$().css({
      width: "100%",
      height: "400px"
    });
  }.observes('geocode'),

  reRenderMap: function() {
      if (this.get('map')) {
        var newLoc = new google.maps.LatLng(this.latitude, this.longitude);
        this.get('map').setCenter(newLoc);
        var marker = new google.maps.Marker({
          position: newLoc,
          map: this.get('map'),
          draggable: false
        });
      }
    }.observes('latitude', 'longitude') //these are bound to lat/lng of Event
    */
});
