import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('home');
  this.route('login');
  this.route('logout');
  this.route('register');
  this.route('reviews');
  this.route('checkout');
  this.route('order');
});

export default Router;
