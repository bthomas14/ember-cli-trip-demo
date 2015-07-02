import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  name2: DS.attr('string'),
  place_type: DS.attr('string'),
  street: DS.attr('string'),
  city: DS.attr('string'),
  region: DS.attr('region'),
  region_id: DS.belongsTo('region'),
  country: DS.attr('string'),
  address: DS.attr('string'),
  cost: DS.attr('number'),
  currency: DS.attr('string'),
  hours: DS.attr('string'),
  eventDates: DS.attr('string'),
  website: DS.attr('string'),
  mediaDesc: DS.attr('string'),
  mediaSrc: DS.attr('string'),
  notes: DS.attr('string'),
});
