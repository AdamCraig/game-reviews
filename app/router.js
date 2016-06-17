import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('game', { path: '/game/:game_id'});
  this.route('favorites');
});

export default Router;
