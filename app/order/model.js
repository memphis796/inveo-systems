import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  itemId: attr('number'),
  itemType: attr('string'),
  quantity: attr('number', { defaultValue: 1 }),
  pricePerUnit: attr('number'),
  shippingAddress1: attr('string'),
  shippingAddress2: attr('string'),
  shippingState: attr('string'),
  shippingCity: attr('string'),
  shippingPostalCode: attr('string'),
  shippingIsBilling: attr('boolean', { defaultValue: true }),
  billingAddress1: attr('string'),
  billingAddress2: attr('string'),
  billingState: attr('string'),
  billingCity: attr('string'),
  billingPostalCode: attr('string'),
  paymentCreditCardNumber: attr('string'),
  paymentCreditCardExpiration: attr('string'),
  paymentCreditCardName: attr('string'),
  paymentCreditCardCvv: attr('number'),
});