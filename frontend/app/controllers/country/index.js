import Ember from 'ember';

export default Ember.Controller.extend({
  selectedMarker: null,

  actions: {
    // set selectedMarker to the last place id clicked
    // this will be observed by the highlightMarker function in large-map view
    /*showMarker: function(param) {
      console.log('showMarker called for ' + param.get('id'));
      this.set('selectedMarker', param.get('id'));
      console.log('selectedMarker is => ' + this.get('selectedMarker'));
    },

    showDetails: function(param) {
      this.toggleProperty('isShowingDetails');
    }*/
  }
});
