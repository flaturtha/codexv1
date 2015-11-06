Template.books.events({
	'keyup input[type=text]':function(event,tmpl){
		if(event.which === 27 || event.which === 13){
			event.preventDefault();
			var book = {};
			book.name = tmpl.find('#bookTitleEnter').value;
			Meteor.call('saveBook',book);
		}
	}
})