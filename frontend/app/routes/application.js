import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('country');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
  }
});
