import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveGame() {
      var params = {
        title: this.get('title'),
        developer: this.get('developer'),
        platform: this.get('platform'),
        genre: this.get('genre'),
        image: this.get('image'),
      };
      this.sendAction('saveGame', params);
      this.set('title', "");
      this.set('developer', "");
      this.set('platform', "");
      this.set('genre', "");
      this.set('image', "");
    },
  }
});
