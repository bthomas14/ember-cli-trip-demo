import Ember from 'ember';

export default Ember.Component.extend({
  isShowingDetails: false,
  
  click: function(param) {
    console.log('activity-details component clicked!');
    this.sendAction('action', this.get('param'));
  },
  actions: {
    showDetails: function() {
      this.toggleProperty('isShowingDetails');
    }
  }
});
