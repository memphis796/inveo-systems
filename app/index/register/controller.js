import Ember from 'ember';

export default Ember.Controller.extend({
  register(formValues) {
    const user = this.store.createRecord(`end-user`, formValues);

    user.save().then(() => {
      this.transitionToRoute(`login`);
    })
    .catch((err) => {
      console.log(err);
    });
  },
});
