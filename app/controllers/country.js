import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',
  country: Ember.computed.alias('controllers.application.model'),
});
