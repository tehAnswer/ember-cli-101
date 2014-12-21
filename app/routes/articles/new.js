import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
	  return this.store.createRecord('article', {
	    friend: this.modelFor('friends/show')
	  });
	},
	actions: {
		save: function() {
			var _this = this;

			this.modelFor('articles/new').save().then(function() {
				_this.transitionTo('articles');
			});
		},
		cancel: function() {
			this.transitionTo('articles');
		}
	},
	deactivate: function () {
		var model = this.modelFor('articles/new');
		
		if (model.get('isNew')) {
			model.destroyRecord();
		}	
	}
});