import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),
  beforeModel() {
    return this.get('currentUser').load();
  },
  model() {
    return this.store.findAll(`laptop`);
  },
});
