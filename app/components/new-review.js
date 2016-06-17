import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        username: this.get('username'),
        rating: "2",
        comment: this.get('comment'),
        time: moment().format('LL'),
        game: this.get('game'),
      };
      this.sendAction('saveReview', params);
      this.set('username', "");
      this.set('rating', "");
      this.set('comment', "");
    },
  }
});
