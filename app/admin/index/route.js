import Ember from 'ember';

export default Ember.Route.extend({
  currentUsser: Ember.inject.service(`current-user`),
  beforeModel() {
    return this.get(`currentUser`).load();
  },
});
