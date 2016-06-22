import Ember from 'ember';

export default Ember.Controller.extend({
  saveLaptop(attrs) {
    const laptop = this.store.createRecord(`laptop`, attrs);

    laptop.save().then(() => {
      this.transitionToRoute(`admin.laptop`);
    }).catch((err) => {
      this.store.unloadRecord(laptop);
    });
  },
});
