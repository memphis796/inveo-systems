import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  beforeModel() {
    return this.get(`currentUser`).load();
  },
  model(params) {
    return this.store.findRecord(`order`, params.order_id);
  },
});
