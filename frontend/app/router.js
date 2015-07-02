import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('country', { path: '/countries/:country_id' }, function() {
    this.route('region', { path: '/:region_id' });
  });
});

export default Router;
