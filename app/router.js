import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function mapper() {
  this.route(`logout`);

  this.route(`admin`, function adminRoute() {
    this.route(`laptop`, function aminLaptopRoute() {
      this.route(`new`);
      this.route(`edit`, { path: `/:id` });
    });
    this.route(`order`, function orderROute() {
      this.route(`edit`, { path: `/:id` });
      this.route(`order`, function orderRoute() {
        this.route(`edit`, { path: `/:id` });
      });
      this.route(`index`);
    });
  });

  this.route(`order`);

  this.route(`account`, function accountRoute() {
    this.route(`order`, function accountOrderRoute() {
      this.route(`view`, { path: `/:order_id` });
    });
  });

  this.route(`index`, { path: `/` }, function indexRoute() {
    this.route(`login`, { path: `/login` });
    this.route(`register`, { path: `/register` });
  });

  this.route(`home`, function homeRoute() {
    this.route(`about`);
    this.route(`reviews`);
    this.route(`support`);
  });

  return this.route;
});

export default Router;
