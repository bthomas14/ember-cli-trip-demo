import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.find('city', { country_id: params.country_id });
  },
  setupController: function(controller, model) {
    this._super(controller, model); //default render template logic
    //var country_controller = this.controllerFor('country');
    //var results = this.store.find('region', { country: model.get('name')});
    //controller.set('regions', results);

    console.log('in country.setupController()');
    var cityResults = this.store.find('city', { country_id: model.get('id')});
    var country_controller = this.controllerFor('country');
    country_controller.set('cities', cityResults);
  }
});
