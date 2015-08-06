import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //return this.store.find('place', { city_id: params.city_id });
    console.log('in Country.CityRoute.model(), params => ' + params.city_id);
    return this.store.find('city', params.city_id );
  },
  setupController: function(controller, model) {
    this._super(controller, model); // default render template logic
    console.log('in Country.CityRoute.setupController()');
    var placeResults = this.store.find('place', { city_id: model.get('id') });
    var cityController = this.controllerFor('country/city');
    cityController.set('places', placeResults);
  }
});
