import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  //activities: DS.hasMany('places', { async: true }),
  desc: DS.attr('string'),
  country_id: DS.belongsTo('country')
});
