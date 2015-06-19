import Ember from 'ember';

export default Ember.Component.extend({
  isShowingDetails: false,

  // on clicking component, send params to showMarker action on regionController
  click: function(param) {
    console.log('activity-details component clicked!');
    this.sendAction('action', this.get('param'));
  },
  actions: {
    // show activity details
    showDetails: function() {
      this.toggleProperty('isShowingDetails');
    }
  }
});
