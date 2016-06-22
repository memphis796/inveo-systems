import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service('current-user'),
  actions: {
    destroyRecord(order) {
      if (confirm('Are you sure you want to delete order #' + order.id + '?')) {
        order.destroyRecord();
      }
    },
  },
});
