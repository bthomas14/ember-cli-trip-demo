import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('country', { path: '/:country_name' }, function() {
    this.route('region', { path: '/:region_id' });
  });
});

Router.reopenClass({
  history: 'auto',
  rootUrl: '/'
});

export default Router;
