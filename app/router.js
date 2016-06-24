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
  this.route(`about`);
  this.route(`reviews`);
  this.route('admin', function() {
    this.route(`laptop`, function() {
      this.route(`new`);
      this.route(`edit`, { path: '/:id' });
    });
    this.route(`order`, function() {
        this.route(`edit`, { path: '/:id' });

  this.route(`order`, function() {
    this.route(`edit`, { path: '/:id' });
  });
      this.route(`index`);
    });
  });
  this.route('order');
  this.route('support');
});

export default Router;
