import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyRecord(order) {
      if (confirm(`Are you sure you want to delete order #` + order.id + `?`)) {
        order.destroyRecord();
      }
    }
  }
});
