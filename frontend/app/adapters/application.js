import DS from 'ember-data';
//import Ember from 'ember';

export default DS.ActiveModelAdapter.extend({
  //namespace: '/'
});

/*export default DS.ActiveModelAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:3000'
});*/

/*export default DS.FixtureAdapter.extend({
  simulateRemoteResponse: true,
  latency: 200,

  queryFixtures: function(fixtures, query, type) {
    var key = Ember.keys(query)[0];
    return fixtures.filterBy(key, query[key]);
  }
});*/
