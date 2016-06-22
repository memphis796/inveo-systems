import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.route('reviews');
=======
  this.route('register');
  this.route('order');
  this.route('logout');
  this.route('login');
  this.route('home');
  this.route('checkout');
  this.route('about');
>>>>>>> 4827f32c5dddf42d34dcc332598d0e528abd75f6
});

export default Router;
