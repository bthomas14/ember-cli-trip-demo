import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  name2: DS.attr('string'),
  place_type: DS.attr('string'),
  street: DS.attr('string'),
  post_code: DS.attr('number'),
  address: DS.attr('string'),
  cost: DS.attr('number'),
  currency: DS.attr('string'),
  hours: DS.attr('string'),
  website: DS.attr('string'),
  mediaDesc: DS.attr('string'),
  mediaSrc: DS.attr('string'),
  notes: DS.attr('string'),
  latitude: DS.attr(),
  longitude: DS.attr(),
  city_id: DS.belongsTo('city'),
  country_id: DS.belongsTo('country')
});
