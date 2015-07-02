import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) { // params = country_name
    console.log('regionRoute params => ' + params.region_id);
    return this.store.find('region', params.region_id); //returns array of regions
    //return this.store.find('region');
  },
  setupController: function(controller, model) {
    this._super(controller, model); // default render template logic

    console.log('in region.setupController()');
    var placeResults = this.store.find('place', { region_id: model.get('id')});
    //var placeResults = this.store.find('place');
    var region_controller = this.controllerFor('country.region');
    region_controller.set('places', placeResults);
  }
});
