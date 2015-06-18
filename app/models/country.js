import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  regions: DS.hasMany('region', { async: true }),
  image: DS.attr('string')
});
