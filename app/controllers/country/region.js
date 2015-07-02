import Ember from 'ember';

export default Ember.Controller.extend({
  selectedMarker: null,

  activityList: function() {
    var places = this.get('activities');
    if(places) {
      console.log('in activityList, there are: '+ places.length + 'places');
      return places.filter(function(item) {
        return item.get('type') == "activity";
      });
    } else {
      return;
    }
    return;
  }.property('activities.@each'),

  restaurantList: function() {
    var places = this.get('activities');
    if(places) {
      console.log('in restaurantList, there are: '+ places.length + 'places');
      return places.filter(function(item) {
        return item.get('type') == "restaurant";
      });
    } else {
      return;
    }
    return;
  }.property('activities.@each'),

  lodgingList: function() {
    var homes = this.get('activities');
    if(homes) {
      return homes.filter(function(item) {
        return item.get('type') == "lodging";
      });
    } else {
      return;
    }
    console.log('in lodgingList, there are: '+ homes.length + 'places');
    return;
  }.property('activities.@each'),

  actions: {
    // set selectedMarker to the last activity id clicked
    // this will be observed by the highlightMarker function in large-map view
    showMarker: function(param) {
      console.log('showMarker called for ' + param.get('id'));
      this.set('selectedMarker', param.get('id'));
    }
  }
});
