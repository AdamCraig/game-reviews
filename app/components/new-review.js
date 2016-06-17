import Ember from 'ember';
import moment from 'moment';

var clearStars = function() {
  $('.star-rating-selection').removeClass('selected-rating');
};

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        username: this.get('username'),
        rating: parseInt(this.get('rating')),
        comment: this.get('comment'),
        time: moment().format('LL'),
        game: this.get('game'),
      };

      if (params.rating && params.username && params.comment) {
        this.sendAction('saveReview', params);
        this.set('username', "");
        clearStars();
        this.set('comment', "");
      } else {
        alert("Please enter a username, star rating and comment for your review before submitting.");
      }

    },
    rateOneStar() {
      clearStars();
      this.set('rating', 1);
      $('#rateOneStar').addClass('selected-rating');
    },
    rateTwoStar() {
      clearStars();
      this.set('rating', 2);
      $('#rateTwoStar').addClass('selected-rating');
    },
    rateThreeStar() {
      clearStars();
      this.set('rating', 3);
      $('#rateThreeStar').addClass('selected-rating');
    },
    rateFourStar() {
      clearStars();
      this.set('rating', 4);
      $('#rateFourStar').addClass('selected-rating');
    },
    rateFiveStar() {
      clearStars();
      this.set('rating', 5);
      $('#rateFiveStar').addClass('selected-rating');
    },
  }
});
