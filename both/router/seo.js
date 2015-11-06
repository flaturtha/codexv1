Meteor.startup(function() {
  if(Meteor.isClient) {
    SEO.config({
      title: 'C\u00f8d\u00eax',
      meta: {
        'description': 'Track Book Dev'
      },
      og: {
        'image': Meteor.absoluteUrl('share-image.png')
      },
      ignore: {
        meta: ['fragment', 'viewport', 'msapplication-TileColor', 'msapplication-TileImage', 'msapplication-config'],
        link: ['stylesheet', 'apple-touch-icon', 'rel', 'shortcut icon', 'icon']
      }
    });
  }
});