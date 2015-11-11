Meteor.methods({
'saveBook':function(book){
      check(book.name,String);
      book.userId = Meteor.userId();
      book.dateentered = new Date();
      book.lastupdate = new Date();
      if(!book.datedue){
        book.datedue = new Date();
      }
      return Books.insert(book);
    }
});
