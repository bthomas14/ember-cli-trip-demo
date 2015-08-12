import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  slug: DS.attr('string'),
  regions: DS.hasMany('region', { async: true })
});
