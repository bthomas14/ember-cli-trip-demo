import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',
  country: Ember.computed.alias('controllers.application.model'),
  sortOption: ['name'],
  sortedCities: Ember.computed.sort('model', 'sortOption'),
  selectedMarker: null,

  actions: {
    // set selectedMarker on hover
    // this will be observed by the highlightMarker function in large-map view
    hover: function(param) {
      console.log('hover called for ' + param.get('id'));
      var countryIndexController = this.controllerFor('country.index');
      countryIndexController.set('selectedMarker', param.get('id'));
    }
  }
});
