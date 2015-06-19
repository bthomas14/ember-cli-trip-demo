import Ember from 'ember';

export default Ember.Controller.extend({
  highlightedMarker: null,
  isShowingDetails: false,

  actions: {
    showDetails: function(param) {
      console.log('showDetails called for ' + param.get('id'));
      this.toggleProperty('isShowingDetails');
      //this.sendAction('action', this.get('param'));
      this.set('highlightedMarker', param.get('id'));
    },
    /*showDetails: function() {
      this.toggleProperty('isShowingDetails');
    },*/
    hover: function(item) {
      console.log('hover called for ' + item.get('id'));
      this.set('highlightMarker', item.get('id'));
    },

  }
});
