import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  actions: {
    saveReview(params) {
      this.sendAction('saveReview', params);
    },
    addToFavorites(game) {
      this.get('favoritesList').add(game);
    }
  }
});
