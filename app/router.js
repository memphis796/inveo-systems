import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route(`logout`);


  this.route(`home`);



  this.route(`login`);
  this.route(`register`);

  this.route(`checkout`);

  this.route(`order`, function() {
    this.route(`edit`, { path: '/:id' });
  });
  this.route(`about`);
  this.route(`reviews`);
  this.route('admin', function() {
    this.route(`order`, function() {
      this.route(`edit`, { path: '/:id' });
      this.route(`index`);
      this.route(`laptop`);
    });
    this.route(`laptop`, function() {
      this.route(`new`);
      this.route('order');
   });
  });
});

export default Router;
