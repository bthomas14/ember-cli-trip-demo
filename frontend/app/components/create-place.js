import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPlace: function() {
      console.log("current model is " + this.store.find('place'));
      var newPlace = this.store.find('place');
      newPlace.save();
    }
  }
});
