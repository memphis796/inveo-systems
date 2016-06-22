import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.route('register');
=======
  this.route('order');
  this.route('logout');
  this.route('login');
  this.route('home');
  this.route('checkout');
  this.route('about');
>>>>>>> d2d5a5ca659bdbebf205321e5bc864fe7f3fa8b0
});

export default Router;
