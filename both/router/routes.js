Router.route('/', {
  name: 'home'
});
Router.route('/books', {
  name: 'books'
});
Router.route('/tasks', {
  name: 'tasks'
});
Router.route('/archives', {
  name: 'archives'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
