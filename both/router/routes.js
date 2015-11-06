Router.route('/', {
  name: 'home'
});
Router.route('/books', {
  name: 'books',
  waitOn:function(){
    return Meteor.subscribe('books');
  },
  data:{
    'books':function(){
      return Books.find();
    }
  },
  onAfterAction: function(){
    SEO.set({
      title: 'Books | ' + SEO.settings.title
    });
  }
});
Router.route('/tasks', {
  name: 'tasks'
});
Router.route('/calendar', {
  name: 'calendar'
});
Router.route('/analytics', {
  name: 'analytics'
});
Router.route('/archives', {
  name: 'archives'
});
Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController',
  // waitOn:function(){
  //   return Meteor.subscribe('books');
  // },
  // data:{
  //   'books':function(){
  //     return Books.find();
  //   }
  // },
  // onAfterAction: function(){
  //   SEO.set({
  //     title: 'Dashboard | ' + SEO.settings.title
  //   });
  // }
});

Router.route('bookView',{
	path: '/books/:id',
	layoutTemplate: 'appLayout',
	// loginRequired: 'entrySignIn',
	waitOn:function(){
		return Meteor.subscribe('books');
	},
	data:function(){
		return Books.findOne({_id:this.params.id});
	},
	onAfterAction:function(){
		SEO.set({
			title:'Book View | ' + SEO.settings.title
		})
	}
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
