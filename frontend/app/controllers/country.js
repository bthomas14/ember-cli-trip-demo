import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',
  country: Ember.computed.alias('controllers.application.model'),
  selectedMarker: null,

  actions: {
    // set selectedMarker on hover
    // this will be observed by the highlightMarker function in large-map view
    hover: function(param) {
      console.log('hover called for ' + param.get('id'));
      this.set('selectedMarker', param.get('id'));
    }
  }
});
