import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //return this.store.find('place', { city_id: params.city_id });
    console.log('in Country.CityRoute.model(), params => ' + params.city_id);
    return this.store.find('place', params.place_id );
  },
  /*setupController: function(controller, model) {
    this._super(controller, model); // default render template logic
    console.log('in Country.CityRoute.setupController()');
    debugger;
    var res = this.store.find('place', { id: model.get('id')});
    var cityController = this.controllerFor('country/city/place');
    cityController.set('model', res);
  }*/
});
