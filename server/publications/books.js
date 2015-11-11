Meteor.publish('books',function(){
  return Books.find({this: this.userId}); /*  */
});