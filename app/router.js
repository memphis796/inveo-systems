import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('reviews');
  this.route('register');
  this.route('order');
  this.route('logout');
  this.route('login');
  this.route('home');
  this.route('checkout');
  this.route('about');
  this.route('admin');
});

export default Router;
