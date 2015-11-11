Template.books.events({
	'keyup input[type=text]':function(event,tmpl){
		if(event.which === 27 || event.which === 13){
			event.preventDefault();
			var book = {};
			book.name = tmpl.find('#bookTitleEnter').value;
			Meteor.call('saveBook',book);
		}
	}
});

Template.meta.events({
	'keyup .o_pub':function(evt,tmpl){
		if(evt.which === 13) {
			var o_pub = tmpl.find('.o_pub').value;
			Books.insert({o_pub:o_pub});
			// alert(o_pub);
		}
	}
});
Template.books.meta = function(){
	return Books.find();
}