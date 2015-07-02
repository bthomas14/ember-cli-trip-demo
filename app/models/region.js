import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  country: DS.belongsTo('country'),
  activities: DS.hasMany('activities', { async: true }),
  lodgings: DS.hasMany('lodging', { async: true }),
  desc: DS.attr('string')
});
