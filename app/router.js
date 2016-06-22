import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.route('logout');
=======
  this.route('login');
  this.route('home');
  this.route('checkout');
  this.route('about');
>>>>>>> 7addc5e21726b89b01eaac49541e27b2cc7b9598
});

export default Router;
