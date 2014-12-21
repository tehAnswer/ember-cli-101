import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed('description', function() {
		return !Ember.isEmpty(this.get('model.description'));
	}),
	actions: {
    save: function() {
    	 if(this.get('isValid')) {
            return true;
         }	
    	 else {
            this.set('errorMessage', 'Fill the description omfg.');
         }	
     }
  }
});