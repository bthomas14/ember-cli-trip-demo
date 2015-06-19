import Ember from 'ember';

export default Ember.Controller.extend({
  selectedMarker: null,
  /*highlightedMarker: function() {
    return this.get('markerId')
  }.property('markerId'),*/

  actions: {
    showMarker: function(param) {
      console.log('showMarker called for ' + param.get('id'));
      this.set('selectedMarker', param.get('id'));
    }
  }
});
