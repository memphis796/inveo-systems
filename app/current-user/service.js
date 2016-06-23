import Ember from 'ember';

// const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
  session: Ember.inject.service(`session`),
  store: Ember.inject.service(),
  load() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      const userId = this.get(`session.data.authenticated.userId`);
      if (!Ember.isEmpty(userId)) {
        return this.get(`store`).find(`end-user`, userId).then((user) => {
          this.set(`model`, user);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  },
});
