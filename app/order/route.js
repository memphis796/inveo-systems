import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    itemId: {
      refreshModel: true,
    },
    itemType: {
      refreshModel: true,
    },
  },
  currentUser: Ember.inject.service('current-user'),
  beforeModel() {
    return this.get('currentUser').load();
  },
  model(params) {
    return this.store.find(params['item-type'], params['item-id']).then((item) => {
      return {
        item: item,
        itemId: params['item-id'],
        itemType: params['item-type'],
        quantity: 1,
        shippingIsBilling: true,
      };
    });
  },
});
