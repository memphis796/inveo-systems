import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
=======
  this.route('reviews');
>>>>>>> e89b55c93414ecf1719476d1c4669a5888682024
  this.route('register');
  this.route('order');
  this.route('logout');
  this.route('login');
  this.route('home');
  this.route('checkout');
  this.route('about');
});

export default Router;
