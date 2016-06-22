import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyRecord(laptop) {
      if (confirm(`Are you sure you wnat to delete laptop #` + laptop.id + `?`)) {
        laptop.destroyRecord();
      }
    }
  }
});
