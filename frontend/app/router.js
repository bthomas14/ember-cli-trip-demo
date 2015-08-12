import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('country', { path: '/:country_id' }, function() {
    this.route('city', { path: '/:city_id'}, function() {
      this.route('place', { path: '/:place_id' });
    });
  });
  /*this.route('country', { path: '/:country_slug' }, function() {
    this.route('city', { path: '/:city_slug'}, function() {
      this.route('place', { path: '/:place_id' });
    });
  });*/
});

export default Router;
