import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  favoritesAverageScore: Ember.computed('favoritesList', function() {
    var totalScore = 0;
    var reviewCount = 0;

    this.get('favoritesList.games').forEach(function(game) {
      game.get('reviews').forEach(function(review) {
        reviewCount += 1;
        totalScore += review.get('rating');
      })
    });

    return (totalScore / reviewCount).toFixed(1);
  }),
});
