import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  name2: DS.attr('string'),
  address: DS.attr('string'),
  street: DS.attr('string'),
  city: DS.attr('string'),
  region: DS.belongsTo('region'),
  region_id: DS.belongsTo('region'),
  country: DS.belongsTo('country'),
  cost: DS.attr('number'),
  currency: DS.attr('string'),
  website: DS.attr('string'),
  notes: DS.attr('string'),
});
