import Ember from 'ember';

export default Ember.Controller.extend({
  updateOrder(order, formValues) {
    order.setProperties(formValues);

    order.save().then(() => {
      this.transitionToRoute('order.index');
    });
  },
});
