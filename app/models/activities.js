import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  name2: DS.attr('string'),
  street: DS.attr('string'),
  city: DS.attr('string'),
  region: DS.attr('region'),
  region_id: DS.belongsTo('region'),
  country: DS.attr('string'),
  country_id: DS.belongsTo('country'),
  cost: DS.attr('number'),
  notes: DS.attr('string'),
});
