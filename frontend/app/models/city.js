import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  name2: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  slug: DS.attr('string'),
  country_id: DS.belongsTo('country'),
  places: DS.hasMany('place', { async: true })
});
