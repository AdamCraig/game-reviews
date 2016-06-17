import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  username: attr(),
  rating: attr(),
  comment: attr(),
  time: attr(),
  game: belongsTo('game', { async: true}),
});
