import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  price: attr(),
  description: attr(),
  name: attr(),
  screenSize: attr(),
  color: attr(),
  weight: attr(),
});
