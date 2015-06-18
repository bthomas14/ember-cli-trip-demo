import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.store.find('region', { country: params.country_name });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
  }
});
