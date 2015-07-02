import Ember from 'ember';

export default Ember.ObjectController.extend({
  isShowingDetails: false,
  highlightedMarker: null,

  actions: {
    showDetails: function(param) {
      this.toggleProperty('isShowingDetails');
      debugger;
      //this.sendAction('action', this.get('param'));
    },

  }

});
