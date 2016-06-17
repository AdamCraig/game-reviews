import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveGame(params) {
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      this.transitionTo('index');
    }
  }
});
