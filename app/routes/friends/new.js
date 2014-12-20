import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('friend');
	},
	actions: {
		save: function() {
			console.log('save-route');
			return false;
		}, 
		cancel: function() {
			console.log('cancel-route');
			return false;
		}
	}
});
