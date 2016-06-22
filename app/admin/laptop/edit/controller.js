import Ember from 'ember';

export default Ember.Controller.extend({
  updateLaptop(laptop, formValues) {
    laptop.setProperties(formValues);

    laptop.save().then(() => {
      this.transitionToRoute(`admin.laptop`);
    });
  },
});
