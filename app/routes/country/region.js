import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) { // params = country_name
    console.log('regionRoute params => ' + params.region_id);
    this.set('selectedRegion', params.region_id);
    return this.store.find('region', params.region_id); //returns array of regions
  },
  setupController: function(controller, model) {
    this._super(controller, model); // default render template logic

    console.log('in region.setupController()');
    /*var result = Ember.RSVP.hash({
      activities: this.store.find('activities', { region_id: model.get('id') }),
      lodgings: this.store.find('lodging', { region_id: model.get('id') })
    })*/
    var activityResults = this.store.find('activities', { region_id: model.get('id')});
    var lodgingResults = this.store.find('lodging', { region_id: model.get('id') });
    var region_controller = this.controllerFor('country.region');
    region_controller.set('activities', activityResults);
    region_controller.set('lodgings', lodgingResults);
  }
});
