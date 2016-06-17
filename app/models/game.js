import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr(),
  developer: attr(),
  platform: attr(),
  genre: attr(),
  image: attr(),
  reviews: hasMany('review', { async: true}),
});
