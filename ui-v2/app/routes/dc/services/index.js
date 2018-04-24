import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  repo: service('services'),
  model: function(params) {
    const repo = get(this, 'repo');
    return hash({
      items: repo.findAllByDatacenter(this.modelFor('dc').dc.Name),
    });
  },
  setupController: function(controller, model) {
    controller.setProperties(model);
  },
});