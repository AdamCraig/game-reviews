import Ember from 'ember';

export default Ember.Service.extend({
  games: [],

  add(game) {
    this.get('games').pushObject(game);
  }
});
