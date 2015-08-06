import Ember from 'ember';

export default Ember.Controller.extend({
  places: null,
  selectedMarker: null,

  activityList: function() {
    var places = this.get('places');
    if(places) {
      return places.filter(function(item) {
        return item.get('place_type') == "activity";
      });
    } else {
      return;
    }
  }.property('places.@each.place_type'),

  breweryList: function() {
    var places = this.get('places');
    if(places) {
      return places.filter(function(item) {
        return item.get('place_type') == "brewery" || item.get('place_type') == 'tap room';
      });
    } else {
      return;
    }
  }.property('places.@each.place_type'),

  lodgingList: function() {
    var homes = this.get('places');
    if(homes) {
      return homes.filter(function(item) {
        return item.get('place_type') === "lodging";
      });
    } else {
      return;
    }
  }.property('places.@each'),

  actions: {
    // set selectedMarker to the last place id clicked
    // this will be observed by the highlightMarker function in large-map view
    showMarker: function(param) {
      console.log('showMarker called for ' + param.get('id'));
      this.set('selectedMarker', param.get('id'));
      console.log('selectedMarker is => ' + this.get('selectedMarker'));
    },

    showDetails: function(param) {
      this.toggleProperty('isShowingDetails');
    }
  }
});
