import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id);
  },

  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('feedback', params);
      var game = params.game;
      game.get('feedbacks').addObject(newReview);
      newReview.save().then(function() {
        return game.save();
      });
    }
  }
});
