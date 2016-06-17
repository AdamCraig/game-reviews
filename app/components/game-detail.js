import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  averageScore: Ember.computed('game', function() {
    var totalScore = 0;
    var reviewCount = 0;

    this.get('game.reviews').forEach(function(review) {
      reviewCount += 1;
      totalScore += review.get('rating');
    });

    return (totalScore / reviewCount).toFixed(1);
  }),

  actions: {
    saveReview(params) {
      this.sendAction('saveReview', params);
    },
    addToFavorites(game) {
      this.get('favoritesList').add(game);
    }

  }
});
