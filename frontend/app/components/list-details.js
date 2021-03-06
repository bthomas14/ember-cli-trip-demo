import Ember from 'ember';

export default Ember.Component.extend({
  isShowingDetails: false,

  didInsertElement: function() {
    this.set('isShowingDetails', false);
  },
  // on clicking component, send params to showMarker action on regionController
  click: function(param) {
    console.log('sending list-details param for id =>' + this.get('param').id);
    //$('.list-item').set('isShowingDetails', false);
    this.sendAction('action', this.get('param'));
  },
  actions: {
    // show place details
    showDetails: function() {
      this.toggleProperty('isShowingDetails');
    }
  }
});
