import DS from 'ember-data';

/*export default DS.RESTAdapter.extend({
  namespace: 'api'
});*/

export default DS.FixtureAdapter.extend({
  simulateRemoteResponse: true,
  latency: 200,
  
  queryFixtures: function(fixtures, query, type) {
    var key = Ember.keys(query)[0];
    return fixtures.filterBy(key, query[key]);
  }

});
