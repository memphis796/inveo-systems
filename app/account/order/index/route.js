import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  beforeModel() {
    return this.get(`currentUser`).load();
  },
  model() {
    return this.store.query(`order`, {
      filter: {
        where: { 'user-id': this.get(`currentUser`).model.id }
      }
    });
  },
});
