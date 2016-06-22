import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
<<<<<<< HEAD
  this.route('order', function() {
    this.route('edit');
  });
=======
  this.route('reviews');
  this.route('register');
  this.route('order');
>>>>>>> 13a8abcee8a8c16e9a263d41a1c0dbb766562199
  this.route('logout');
  this.route('login');
  this.route('home');
  this.route('checkout');
  this.route('about');
  this.route('admin');
});

export default Router;
