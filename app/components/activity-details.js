import Ember from 'ember';

export default Ember.Component.extend({
  isShowingDetails: false,
  highlightedMarker: null,

  actions: {
    showDetails: function(param) {
      this.toggleProperty('isShowingDetails');
      this.sendAction('action', this.get('param'));
      this.set('highlightedMarker', param.get('id'));
    },

  }
});
