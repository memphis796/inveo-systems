import Ember from 'ember';

export default Ember.Controller.extend({
// Define allowed query string paarmeters here. Attempts to use undefined
// query string parmeters in urls will see the parameter be removed.
//
// Both of item and type avoids conflicts when more than one product
// type exist So even if only laptops are sold, still use them both.
  queryParams: ['item-id', 'item-type'],
  saveOrder(attrs) {
    const order = this.store.createRecord('order', attrs);

    order.setProperties({
      itemId: this.get('item-id'),
      itemType: this.get('item-type'),
    });

    order.save().then(() => {
      this.transitionToRoute('home');
    }).catch((err) => {
      this.store.unloadRecord(order);
    });
  },
});
