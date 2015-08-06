import Ember from 'ember';

export default Ember.Component.extend({
  regions: ['Henley-on-Thames', 'London', 'Southern Germany', 'Western Germany', 'Eastern Germany', 'Central Germany', 'Northern Germany', 'Flanders', 'Wallonia'],
  selectedRegion: null,
  
  actions: {
    createPlace: function() {
      console.log("current model is " + this.store.find('place'));
      var newPlace = this.store.find('place');
      newPlace.save();
    }
  }
});
