import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return this.store.findRecord(`order`, id).then((order) => {
      return this.store.findRecord(order.get('itemType'), order.get('itemId')).then((item) => {
        order.item = item;
        return order;
      });
    });
  },
});
