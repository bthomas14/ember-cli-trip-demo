import Ember from 'ember';

export default Ember.Component.extend({
  isShowingDetails: false,

  actions: {
    showDetails: function() {
      this.toggleProperty('isShowingDetails');
    }
  }
});
