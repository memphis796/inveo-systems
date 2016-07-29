import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  itemId: attr(`number`),
  itemType: attr(`string`),
  itemPrice: attr(`number`),
  itemName: attr(`string`),
  itemColor: attr(`string`),
  itemScreenSize: attr(`string`),
  itemDescription: attr(`string`),
  itemImage: attr(`string`),
  quantity: attr(`number`, { defaultValue: 1 }),
  shippingAddress1: attr(`string`),
  shippingAddress2: attr(`string`),
  shippingState: attr(`string`),
  shippingCity: attr(`string`),
  shippingPostalCode: attr(`string`),
  shippingIsBilling: attr(`boolean`, { defaultValue: true }),
  billingAddress1: attr(`string`),
  billingAddress2: attr(`string`),
  billingState: attr(`string`),
  billingCity: attr(`string`),
  billingPostalCode: attr(`string`),
  paymentCreditCardNumber: attr(`string`),
  paymentCardExpiration: attr(`string`),
  CreditCardName: attr(`string`),
  CreditCardCvv: attr(`number`),
  totalPrice: Ember.computed(`itemPrice`, `quantity`, function computeTotalPrice() {
    return this.get(`itemPrice`) * this.get(`quantity`);
  }),
});
