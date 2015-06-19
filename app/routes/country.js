import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.find('region', { country: params.country_name });
  },
  setupController: function(controller, model) {
    this._super(controller, model); //default render template logic
    debugger;
    var result = this.store.find('country', {region: model.objectAt(0).get('id')});

    //var country_controller = this.controllerFor('country');
    //controller.set('country', result);
    //country_controller.set('country', 'result');
  }
});
